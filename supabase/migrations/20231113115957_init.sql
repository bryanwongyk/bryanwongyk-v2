CREATE TABLE post_views (
    slug TEXT PRIMARY KEY,
    views_count BIGINT DEFAULT 0,
    last_updated TIMESTAMP DEFAULT statement_timestamp()
);

CREATE OR REPLACE FUNCTION increment_post_views(post_slug TEXT)
RETURNS BIGINT AS $$
DECLARE
    latest_view_count BIGINT;
BEGIN
    INSERT INTO post_views (slug, views_count)
    VALUES (post_slug, 1)
    ON CONFLICT (slug)
    DO UPDATE SET
        views_count = post_views.views_count + excluded.views_count,
        last_updated = statement_timestamp()
    RETURNING views_count INTO latest_view_count;
    RETURN latest_view_count;
END;
$$ LANGUAGE plpgsql;
