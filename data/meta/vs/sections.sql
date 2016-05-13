--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

SET search_path = vital_signs, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: sections; Type: TABLE; Schema: vital_signs; Owner: jfi; Tablespace: 
--

CREATE TABLE sections (
    id integer NOT NULL,
    section text,
    color1 text,
    color2 text,
    color3 text,
    color4 text,
    color5 text
);


ALTER TABLE vital_signs.sections OWNER TO jfi;

--
-- Name: sections_id_seq; Type: SEQUENCE; Schema: vital_signs; Owner: jfi
--

CREATE SEQUENCE sections_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE vital_signs.sections_id_seq OWNER TO jfi;

--
-- Name: sections_id_seq; Type: SEQUENCE OWNED BY; Schema: vital_signs; Owner: jfi
--

ALTER SEQUENCE sections_id_seq OWNED BY sections.id;


--
-- Name: id; Type: DEFAULT; Schema: vital_signs; Owner: jfi
--

ALTER TABLE ONLY sections ALTER COLUMN id SET DEFAULT nextval('sections_id_seq'::regclass);


--
-- Data for Name: sections; Type: TABLE DATA; Schema: vital_signs; Owner: jfi
--

COPY sections (id, section, color1, color2, color3, color4, color5) FROM stdin;
1	Education	#FAF184	#FAD156	#F2A72D	#AC5525	#690B0D
2	Housing	#F8E8D3	#EABA9F	#D88F70	#C26746	#AB4224
3	Socioeconomic/Demographics	#E5D4E8	#BFA3CD	#9D78AD	#7B4F8C	#5E2C70
4	Arts and Culture	#FFEBCC	#FDCB97	#FAAB67	#F6903B	#EE7722
5	Economic and Workforce Development	#EFEBA9	#C9BC87	#A59065	#856B49	#674931
6	Health and Human Welfare	#F9CBDF	#F49EBF	#E7719D	#D94680	#C61C65
7	Sustainability	#D7E7AF	#B5C989	#98A767	#7A8748	#606B2E
8	Crime and Safety	#D8EEEA	#A0C3BE	#6B9893	#40736D	#164F4A
\.


--
-- Name: sections_id_seq; Type: SEQUENCE SET; Schema: vital_signs; Owner: jfi
--

SELECT pg_catalog.setval('sections_id_seq', 1, false);


--
-- Name: vs_sections_id; Type: CONSTRAINT; Schema: vital_signs; Owner: jfi; Tablespace: 
--

ALTER TABLE ONLY sections
    ADD CONSTRAINT vs_sections_id PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

