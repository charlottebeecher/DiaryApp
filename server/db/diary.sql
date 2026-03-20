DROP TABLE IF EXISTS dairy;

CREATE TABLE dairy (
    diary_id INT GENERATED ALWAYS AS IDENTITY,
    title TEXT,
    content TEXT,
    category TEXT CHECK (category IN ('work', 'personal', 'health', 'travel', 'other')),
    last_updated timestamp DEFAULT CURRENT_TIMESTAMP,
    create_date timestamp DEFAULT CURRENT_TIMESTAMP
);