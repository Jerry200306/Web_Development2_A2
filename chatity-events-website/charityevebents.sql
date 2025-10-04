CREATE DATABASE IF NOT EXISTS charityevents_db;
USE charityevents_db;

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    full_description TEXT,
    event_date DATETIME NOT NULL,
    location VARCHAR(255) NOT NULL,
    category_id INT,
    organization_name VARCHAR(255),
    purpose TEXT,
    ticket_price DECIMAL(10,2) DEFAULT 0,
    goal_amount DECIMAL(15,2),
    current_amount DECIMAL(15,2) DEFAULT 0,
    image_url VARCHAR(500),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (name, description) VALUES
('Gala Dinner', 'Formal fundraising dinners with entertainment'),
('Fun Run', 'Charity running events for all fitness levels'),
('Silent Auction', 'Bidding events for donated items'),
('Concert', 'Musical performances for charity'),
('Community Fair', 'Local community fundraising events'),
('Workshop', 'Educational charity events');

INSERT INTO events (title, description, full_description, event_date, location, category_id, organization_name, purpose, ticket_price, goal_amount, current_amount, image_url) VALUES
('Annual Hope Gala', 'Elegant evening supporting cancer research', 'Join us for an unforgettable evening of fine dining, live entertainment, and silent auction. All proceeds support cancer research initiatives.', '2024-11-15 19:00:00', 'Grand Ballroom, 123 Main St', 1, 'Cancer Research Foundation', 'Funding cancer research projects', 150.00, 50000.00, 32500.00, '/images/gala.jpg'),
('City Fun Run 2024', '5K run through downtown for children''s hospital', 'A family-friendly 5K run through scenic downtown routes. Participants receive t-shirt and medal. Refreshments provided.', '2024-10-20 08:00:00', 'Central Park, Downtown', 2, 'Children''s Health Foundation', 'Supporting pediatric care facilities', 35.00, 25000.00, 18000.00, '/images/funrun.jpg'),
('Art for Hope Auction', 'Silent auction featuring local artists'' works', 'Bid on beautiful artworks from local talents. Wine and cheese reception included. Perfect for art enthusiasts and collectors.', '2024-09-30 18:30:00', 'City Art Gallery, 456 Art Ave', 3, 'Local Arts Council', 'Supporting emerging artists and art programs', 25.00, 15000.00, 8500.00, '/images/auction.jpg'),
('Charity Concert Night', 'An evening of music supporting homeless shelters', 'Enjoy performances by local bands and musicians. Food trucks and beverage stations available on site.', '2024-11-05 19:30:00', 'Riverside Amphitheater', 4, 'Homeless Support Network', 'Funding homeless shelter operations', 45.00, 30000.00, 22000.00, '/images/concert.jpg'),
('Community Health Fair', 'Free health screenings and wellness activities', 'Offering free health checks, fitness demonstrations, and wellness workshops for the whole community.', '2024-10-12 10:00:00', 'Community Center, 789 Oak St', 5, 'Community Health Initiative', 'Promoting community health awareness', 0.00, 10000.00, 6500.00, '/images/healthfair.jpg'),
('Youth Coding Workshop', 'Learn coding while supporting STEM education', 'Hands-on coding workshop for youth aged 12-18. All equipment provided. No experience necessary.', '2024-11-08 13:00:00', 'Tech Hub, 321 Innovation Dr', 6, 'STEM Education Foundation', 'Providing STEM resources to schools', 20.00, 12000.00, 7500.00, '/images/workshop.jpg'),
('Winter Charity Ball', 'Festive evening supporting winter relief efforts', 'Black-tie optional event with dinner, dancing, and fundraising activities for winter emergency services.', '2024-12-10 20:00:00', 'Luxury Hotel Grand Ballroom', 1, 'Winter Relief Organization', 'Funding winter emergency services', 200.00, 75000.00, 45000.00, '/images/winterball.jpg'),
('Autumn Trail Run', '10K trail run through beautiful autumn foliage', 'Challenging 10K course through scenic trails. Professional timing, post-race refreshments, and awards ceremony.', '2024-10-27 09:00:00', 'Forest Park Trails', 2, 'Parks Conservation Society', 'Maintaining public park trails', 50.00, 20000.00, 12500.00, '/images/trailrun.jpg');