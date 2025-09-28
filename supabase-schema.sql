-- Tanzania Yetu Tourism Database Schema
-- Run this in your Supabase SQL Editor

-- Enable Row Level Security
ALTER DEFAULT PRIVILEGES REVOKE EXECUTE ON FUNCTIONS FROM PUBLIC;

-- Create profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    full_name TEXT,
    phone TEXT,
    location TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    features TEXT[],
    duration TEXT,
    price_from DECIMAL(10,2),
    image_url TEXT,
    category TEXT, -- safari, photography, cultural, etc.
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create destinations table
CREATE TABLE IF NOT EXISTS destinations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL, -- national_park, safari_tour, zanzibar
    description TEXT,
    image_url TEXT,
    location TEXT,
    highlights TEXT[],
    best_time_to_visit TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create wildlife table
CREATE TABLE IF NOT EXISTS wildlife (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    tag TEXT, -- Big Five, Predator, Herbivore
    description TEXT,
    habitat TEXT,
    status TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    service_id UUID REFERENCES services(id),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    guests INTEGER NOT NULL DEFAULT 1,
    special_requests TEXT,
    status TEXT DEFAULT 'pending', -- pending, confirmed, cancelled
    total_price DECIMAL(10,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    country TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new', -- new, responded, closed
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create meeting_requests table
CREATE TABLE IF NOT EXISTS meeting_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    preferred_date DATE NOT NULL,
    status TEXT DEFAULT 'pending', -- pending, scheduled, completed, cancelled
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_destinations_updated_at BEFORE UPDATE ON destinations FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_meeting_requests_updated_at BEFORE UPDATE ON meeting_requests FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Row Level Security Policies

-- Profiles: Users can only see and edit their own profile
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Services: Public read, admin write
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view active services" ON services FOR SELECT USING (is_active = true);

-- Destinations: Public read, admin write
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view active destinations" ON destinations FOR SELECT USING (is_active = true);

-- Wildlife: Public read, admin write
ALTER TABLE wildlife ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view wildlife" ON wildlife FOR SELECT TO PUBLIC USING (true);

-- Bookings: Users can only see their own bookings
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own bookings" ON bookings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create bookings" ON bookings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own bookings" ON bookings FOR UPDATE USING (auth.uid() = user_id);

-- Contact submissions: Users can create, no read access (admin only via separate interface)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can create contact submissions" ON contact_submissions FOR INSERT TO PUBLIC WITH CHECK (true);

-- Meeting requests: Users can create, no read access (admin only via separate interface)
ALTER TABLE meeting_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can create meeting requests" ON meeting_requests FOR INSERT TO PUBLIC WITH CHECK (true);

-- Insert sample data
INSERT INTO services (title, description, features, duration, price_from, image_url, category) VALUES
('Safari Adventures', 'Guided wildlife safaris through Serengeti, Ngorongoro Crater, and Tarangire.', ARRAY['Big Five encounters', 'Professional guides', '4x4 vehicles'], '3-14 days', 180.00, 'https://images.unsplash.com/photo-1602410132231-9e6c692e02db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0', 'safari'),
('Photography Tours', 'Capture the Big Five and stunning landscapes with expert guidance.', ARRAY['Golden hour sessions', 'Photography workshops', 'Equipment rental'], '5-10 days', 250.00, 'https://plus.unsplash.com/premium_photo-1677698305560-a5a4ecef617e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0', 'photography'),
('Cultural Experiences', 'Immerse in Maasai villages and Tanzanian traditions.', ARRAY['Village visits', 'Traditional dances', 'Local crafts'], '1-3 days', 120.00, 'https://images.unsplash.com/photo-1648395736177-7c553b87708e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0', 'cultural'),
('Group & Private Tours', 'Customized tours for families, couples, and groups.', ARRAY['Tailored experiences', 'Flexible scheduling', 'Private vehicles'], 'Customizable', 200.00, 'https://plus.unsplash.com/premium_photo-1682390303252-4e1e31e692e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0', 'private'),
('Camping Safaris', 'Authentic bush camping under African stars.', ARRAY['Bush camping', 'Campfire stories', 'Stargazing'], '3-7 days', 150.00, 'https://plus.unsplash.com/premium_photo-1664303903698-8dd4c3fb4394?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0', 'camping'),
('Bird Watching', 'Discover over 1,000 bird species in Tanzania''s ecosystems.', ARRAY['Expert birding guides', 'Binocular rental', 'Endemic species'], '2-8 days', 160.00, 'https://plus.unsplash.com/premium_photo-1661846340419-89bf27138124?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0', 'birding');

INSERT INTO destinations (name, type, description, location, highlights) VALUES
('Serengeti National Park', 'national_park', 'Famous for the Great Migration and abundant wildlife', 'Northern Tanzania', ARRAY['Great Migration', 'Big Five', 'Endless Plains']),
('Ngorongoro Conservation Area', 'national_park', 'UNESCO World Heritage Site with incredible wildlife density', 'Northern Tanzania', ARRAY['Ngorongoro Crater', 'Black Rhino', 'Maasai Culture']),
('Tarangire National Park', 'national_park', 'Known for large elephant herds and baobab trees', 'Northern Tanzania', ARRAY['Elephant Herds', 'Baobab Trees', 'Bird Watching']),
('Lake Manyara National Park', 'national_park', 'Famous for tree-climbing lions and flamingos', 'Northern Tanzania', ARRAY['Tree-climbing Lions', 'Flamingos', 'Hot Springs']),
('12 Days Tanzania Luxury Safari & Zanzibar Beach Tour', 'safari_tour', 'Complete Tanzania experience with beach relaxation', 'Tanzania & Zanzibar', ARRAY['Wildlife Safari', 'Beach Holiday', 'Cultural Tours']),
('9 Days Serengeti Wildebeest Migration Safari', 'safari_tour', 'Follow the Great Migration across the Serengeti', 'Serengeti Ecosystem', ARRAY['Great Migration', 'River Crossings', 'Predator Action']),
('7 Days Tanzania Luxury Safari', 'safari_tour', 'Premium safari experience in northern circuit', 'Northern Tanzania', ARRAY['Luxury Lodges', 'Private Guides', 'Exclusive Access']),
('6 Days Tanzania Wildlife Safari', 'safari_tour', 'Classic wildlife safari covering major parks', 'Northern Circuit', ARRAY['Big Five', 'Cultural Visits', 'Scenic Landscapes']),
('5 Days Lake Manyara & Serengeti Wildlife Safari', 'safari_tour', 'Focused safari in two iconic parks', 'Manyara & Serengeti', ARRAY['Diverse Ecosystems', 'Wildlife Photography', 'Cultural Interaction']);

INSERT INTO wildlife (name, tag, description, habitat, status, image_url) VALUES
('African Lion', 'Big Five', 'The king of the savanna, lions are social cats living in prides.', 'Serengeti National Park', 'Vulnerable', 'https://images.unsplash.com/photo-1727254662367-66b2d8dab647?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbnMlMjBpbiUyMGFwYXJrfGVufDB8fDB8fHww'),
('African Elephant', 'Big Five', 'The largest land mammal, known for their intelligence and family bonds.', 'Tarangire National Park', 'Endangered', 'https://plus.unsplash.com/premium_photo-1661943889401-10f6b011b24b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVsZXBoYW50cyUyMGluJTIwYXBhcmslMjB0YW56YW5pYXxlbnwwfHwwfHx8MA%3D%3D'),
('Leopard', 'Big Five', 'Elusive and powerful, leopards are excellent climbers and hunters.', 'Ngorongoro Crater', 'Near Threatened', 'https://images.unsplash.com/photo-1569691105751-88df003de7a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxlb3BhcmR8ZW58MHx8MHx8fDA%3D'),
('Cheetah', 'Predator', 'The fastest land animal, capable of reaching speeds up to 70 mph.', 'Serengeti Plains', 'Vulnerable', 'https://images.unsplash.com/photo-1705857613164-ebd52786e41f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZWV0YWglMjBpbiUyMGElMjBncm91cHxlbnwwfHwwfHx8MA%3D%3D'),
('Wildebeest', 'Herbivore', 'Famous for their annual migration across the Serengeti ecosystem.', 'Serengeti-Mara Ecosystem', 'Least Concern', 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lsZGViZWVzdHxlbnwwfHwwfHx8MA%3D%3D');

-- Create a function to automatically create a profile when a user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a trigger to automatically create a profile for new users
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
