USE charityevents_db;


INSERT INTO categories (name, description) VALUES
('Fun Run', 'Charity running events for various causes'),
('Gala Dinner', 'Formal fundraising dinners and auctions'),
('Concert', 'Musical performances for charity'),
('Auction', 'Silent and live auction events'),
('Workshop', 'Educational and skill-building events'),
('Community Fair', 'Local community fundraising fairs');


INSERT INTO organizations (name, description, contact_email, contact_phone, address) VALUES
('HopeConnect', 'Connecting communities through charitable events', 'info@hopeconnect.org', '(02) 1234 5678', '123 Charity Street, Sydney, NSW 2000'),
('Ocean Guardians', 'Protecting marine life and coastal environments', 'contact@oceanguardians.org', '(03) 9876 5432', '456 Beach Road, Melbourne, VIC 3000'),
('Wildlife Rescue', 'Rescuing and rehabilitating native wildlife', 'help@wildliferescue.org', '(07) 5555 1234', '789 Bushland Ave, Brisbane, QLD 4000');


INSERT INTO events (name, description, full_description, category_id, organization_id, date, time, location, venue_name, ticket_price, goal_amount, current_amount, image_url) VALUES
('Sydney Coastal Cleanup Run', 'Join us for a 5km fun run along Sydney beaches while helping clean up our coastline', 'This annual event combines fitness with environmental action. Participants will run along beautiful coastal paths while collecting litter. All proceeds go towards ocean conservation efforts.', 1, 2, '2025-10-15', '08:00:00', 'Bondi Beach, Sydney', 'Bondi Pavilion', 25.00, 5000.00, 3200.00, '/images/coastal-run.jpg'),

('HopeConnect Annual Gala', 'An elegant evening of fine dining, entertainment, and fundraising for community projects', 'Join us for our black-tie gala event featuring guest speakers, live music, and silent auction. This event supports our youth mentorship programs across NSW.', 2, 1, '2025-11-20', '18:30:00', 'Sydney CBD', 'Grand Ballroom, Hilton Hotel', 150.00, 25000.00, 18000.00, '/images/gala-dinner.jpg'),

('Rock for Wildlife Concert', 'Live music festival featuring local artists, with all proceeds supporting wildlife rescue', 'Enjoy performances from 10 amazing local bands across two stages. Food trucks, bar, and wildlife education displays. Help us reach our goal to build a new wildlife rehabilitation center.', 3, 3, '2025-09-30', '14:00:00', 'Brisbane Parklands', 'Riverstage', 45.00, 15000.00, 8900.00, '/images/rock-concert.jpg'),

('Art for Heart Auction', 'Silent auction featuring works from prominent Australian artists', 'Bid on incredible artworks while supporting cardiac health initiatives. Featuring paintings, sculptures, and photography from 50+ artists. Preview available one week before the event.', 4, 1, '2025-10-08', '17:00:00', 'Melbourne Arts Precinct', 'NGV Gallery', 20.00, 20000.00, 12500.00, '/images/art-auction.jpg'),

('Bushfire Recovery Workshop', 'Learn emergency preparedness and wildlife first aid in this hands-on workshop', 'This full-day workshop covers fire safety, emergency planning, and basic wildlife rescue techniques. Perfect for rural residents and animal lovers. Includes lunch and materials.', 5, 3, '2025-10-25', '09:00:00', 'Blue Mountains', 'Conservation Training Center', 15.00, 3000.00, 1500.00, '/images/workshop.jpg'),

('Spring Community Fair', 'Family-friendly fair with games, food stalls, and activities for all ages', 'Traditional country fair with a charitable twist! Petting zoo, face painting, cake stall, and live demonstrations. Supporting local community outreach programs.', 6, 1, '2025-09-15', '10:00:00', 'Parramatta Park', 'Parramatta Pavilion', 0.00, 5000.00, 2800.00, '/images/community-fair.jpg'),

('Moonlight Marathon', 'Night-time half marathon through the city to support homeless services', 'Experience the city like never before in this illuminated night run. Glow sticks, light displays, and after-party included. Supporting emergency accommodation services.', 1, 1, '2025-11-05', '19:00:00', 'Sydney Harbour', 'Opera House Forecourt', 60.00, 12000.00, 7500.00, '/images/marathon.jpg'),

('Jazz for Justice', 'Intimate jazz evening supporting legal aid services for vulnerable communities', 'An evening of smooth jazz in a sophisticated setting. Featuring the Sydney Jazz Quartet and guest vocalists. Supporting access to justice initiatives.', 3, 1, '2025-10-12', '19:30:00', 'Surry Hills', 'The Jazz Cellar', 35.00, 8000.00, 4200.00, '/images/jazz-night.jpg'),

('Sustainable Cooking Class', 'Learn to cook delicious plant-based meals with top chefs', 'Hands-on cooking class focusing on sustainable, locally-sourced ingredients. Take home recipes and cooking skills. Supporting food security programs.', 5, 2, '2025-09-28', '11:00:00', 'Newtown, Sydney', 'Green Kitchen Studio', 40.00, 4000.00, 2200.00, '/images/cooking-class.jpg'),

('Children''s Book Festival', 'Celebrating children''s literature with authors, illustrators, and story time', 'Meet your favorite authors, get books signed, and participate in creative workshops. All book sales support literacy programs in remote communities.', 6, 1, '2025-10-18', '09:00:00', 'State Library of NSW', 'Metcalfe Auditorium', 5.00, 6000.00, 3100.00, '/images/book-festival.jpg');