-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: players; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.players (
    player_id serial PRIMARY KEY,
    player_name VARCHAR(255),
    player_score VARCHAR(400),
    created_at timestamp NOT NULL DEFAULT NOW()
);


--
-- Name: lastword; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lastword (
    id serial PRIMARY KEY,
    player_name VARCHAR(255),
    lastword_guessed VARCHAR(500),
    created_at timestamp NOT NULL DEFAULT NOW()
);


--
-- Name: wordbank; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.wordbank (
    id serial PRIMARY KEY,
    word VARCHAR(255)
);


--
-- Data for Name: players; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.players (player_name, player_score)
VALUES 
    ('Allegra', 10000),
    ('Toby', 500000),
    ('Cassie',6000),
    ('Target', 111000);

--
-- Data for Name: lastword; Type: TABLE DATA; Schema: public; Owner: -
--
INSERT INTO public.lastword (player_name, lastword_guessed)
VALUES 
    ('Allegra', 'tunas'),
    ('Toby', 'birds'),
    ('Cassie','treat'),
    ('Target', 'light');


--
-- Data for Name: lastword; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.wordbank (word)
VALUES 
				('paper'),
				('tasty'),
				('lemon'),
				('spell'),
				('large'),
				('smile'),
				('joint'),
				('asset'),
				('chord'),
				('solve'),
				('brave'),
				('feign'),
				('sweet'),
				('entry'),
				('glass'),
				('shame'),
				('craft'),
				('reign'),
				('voter'),
				('taste'),
				('trend'),
				('pride'),
				('board'),
				('suite'),
				('panda');
    
    
--
-- PostgreSQL database dump complete
--



