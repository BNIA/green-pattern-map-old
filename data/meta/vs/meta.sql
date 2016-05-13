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
-- Name: meta; Type: TABLE; Schema: vital_signs; Owner: jfi; Tablespace: 
--

CREATE TABLE meta (
    id integer NOT NULL,
    indicator_id integer,
    short_name text,
    long_name text,
    definition text,
    data_year text,
    indicator_nbr text,
    data_avail boolean DEFAULT false,
    wishlist boolean,
    years text,
    norm_src text
);


ALTER TABLE vital_signs.meta OWNER TO jfi;

--
-- Data for Name: meta; Type: TABLE DATA; Schema: vital_signs; Owner: jfi
--

COPY meta (id, indicator_id, short_name, long_name, definition, data_year, indicator_nbr, data_avail, wishlist, years, norm_src) FROM stdin;
0	\N	tpop	Total Population	The total number of persons of all ages that live within an area. This indicator is frequently used to normalize data to allow for comparison across areas.	2013	1	f	f	2010	\N
1	\N	male	Total Male Population	The total number of men of all ages of all ages that live within an area.	2013	2	f	f	2010	\N
2	\N	female	Total Female Population	The total number of women of all ages that live within an area.	2013	3	f	f	2010	\N
3	\N	paa	Percent of Residents - Black/African-American (Non-Hispanic)	The total number of persons that identify themselves as being racially Black or African American (and ethnically non-Hispanic) out of the total number of persons living in an area.  �Black or African American� refers to a person having origins in any of the Black racial groups of Africa. It includes people who indicated their race as �Black�.	2013	4	f	f	2010	\N
4	\N	pwhite	Percent of Residents - White/Caucasian (Non-Hispanic)	The total number of persons that identify themselves as being racially White (and ethnically non-Hispanic) out of the total number of persons living in an area.   �White� refers to a person having origins in any of the original peoples of Europe, the Middle East, or North Africa. It includes people who indicated their race(s) as �White�.	2013	5	f	f	2010	\N
5	\N	pasi	Percent of Residents - Asian (Non-Hispanic)	The total number of persons that identify themselves as being Asian (and non-Hispanic) out of the total number of persons living in an area.  �Asian� refers to a person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam.	2013	6	f	f	2010	\N
6	\N	p2more	Percent of Residents - Two or More Races (Non-Hispanic)	The total number of persons that identify themselves as being of two or more races (and non-Hispanic) out of the total number of persons living in an area.	2013	7	f	f	2010	\N
7	\N	ppac	Percent of Residents - All Other Races (Hawaiian/ Pacific Islander, Alaskan/ Native American Other Race) (Non-Hispanic)	The total number of persons that identify themselves as being of either American Indian, Alaskan Native, Native Hawaiian or Other Pacific Islander, or some other race (non-Hispanic) out of the total number of persons living in an area.	2013	8	f	f	2010	\N
8	\N	phisp	Percent of Residents - Hispanic	The total number of persons that identify their ethnicity as being Hispanic or Latino out of the total number of persons living in an area. Hispanic origin can be viewed as the heritage, nationality group, lineage, or country of birth of the person or the person�s parents or ancestors before their arrival in the United States. People who identify their origin as Hispanic, Latino, or Spanish may be any race.	2013	9	f	f	2010	\N
9	\N	racdiv	Racial Diversity Index	The percent chance that two people picked at random within an area will be of a different race/ethnicity.  This number does not reflect which race/ethnicity is predominant within an area.  The higher the value, the more racially and ethnically diverse an area.	2013	10	f	f	2010	\N
10	\N	age5_	Percent of Population 0-5 years old	The percent of persons 5 years or under out of all persons living in an area.	2013	11	f	f	2010	\N
11	\N	age18_	Percent of Population 6-18 years old	The percent of persons aged 6 to 18 years old out of all persons living in an area.	2013	12	f	f	2010	\N
12	\N	age24_	Percent of Population 19-24 years old	The percent of persons aged 19 to 24 years old out of all persons living in an area.	2013	13	f	f	2010	\N
13	\N	age64_	Percent of Population 25-64 years old	The percent of persons aged 25 to 64 years old out of all persons living in an area.	2013	14	f	f	2010	\N
14	\N	age65_	Percent of Population 65 years and over	The total number of persons 65 years old and above out of all persons living in an area.	2013	15	f	f	2010	\N
15	\N	hhs	Total Number of Households	A household consists of all the people occupying a housing unit.  A household includes related and unrelated persons, if any, such as lodgers, foster children, wards, or employees who share the housing unit. A person living alone in a housing unit, or a group of unrelated people sharing a housing unit such as partners or roomers, is also counted as a household. The count of households excludes group quarters.	2013	16	f	f	2010	\N
16	\N	femhhs	Percent of Female-Headed Households with Children Under 18	The percentage of female-headed households with children under 18 out of all households with children under 18 in an area.	2013	17	f	f	2010	\N
17	\N	fam	Percent of Households with Children Under 18	The percentage of households with children living in the household that are under the age of 18 out of all households.	2013	18	f	f	2010	\N
18	\N	hhsize	Average Household Size	The median value of number of persons living within a household.  The average size of a household is obtained by dividing the number of persons in households by the number of households (or householders).	2013	19	f	f	2010	\N
19	83	mhhi	Median Household Income	The median household income is the middle value of the incomes earned by households within an area for the prior year.  The median value is used as opposed to the average so that both extremely high and extremely low prices do not distort the total amount of income earned by households in an area.	2013	20	t	f	2009-2013	\N
20	52	hh25inc	Percent of Households Earning Less than $25,000	The percentage of households earning less than $25,000 out of all households in an area.	2013	21	t	f	2009-2013	\N
21	53	hh40inc	Percent of Households Earning $25,000 to $40,000	The percentage of households earning between $25,000 and $39,999 out of all households in an area.	2013	22	t	f	2009-2013	\N
22	54	hh60inc	Percent of Households Earning $40,000 to $60,000	The percentage of households earning between $40,000 and $59,999 out of all households in an area.	2013	23	t	f	2009-2013	\N
23	55	hh75inc	Percent of Households Earning $60,000 to $75,000	The percentage of households earning between $60,000 and $74,999 out of all households in an area.	2013	24	t	f	2009-2013	\N
24	57	hhm75	Percent of Households Earning More than $75,000	The percentage of households earning more than $75,000 out of all households in an area.	2013	25	t	f	2009-2013	\N
25	\N	gini	Inequality Index (NOT YET DECIDED)	\N	2013	26	f	t	2009-2013	\N
26	58	hhpov	Percent of Family Households Living Below the Poverty Line	This indicator measures the percentage of households whose income fell below the poverty threshold out of all households in an area.  Federal and state governments use such estimates to allocate funds to local communities. Local communities use these estimates to identify the number of individuals or families eligible for various programs.	2013	27	t	f	2009-2013	\N
191	21	bkln	Number of Miles of Bike Lanes	Measures the linear miles of designated bike lanes within the roadway system.	2013	192	f	f	2012	\N
27	56	hhchpov	Percent of Children Living Below the Poverty Line	This indicator measures the percentage of persons under the age of 18 living in households where the total income fell below the poverty threshold out of all children in households in an area.  Federal and state governments use such estimates to allocate funds to local communities. Local communities use these estimates to identify the number of individuals or families eligible for various programs.	2013	28	t	f	2009-2013	\N
28	113	salepr	Median Price of Homes Sold	The median home sales price is the middle value of the prices for which homes are sold (both market and private transactions) within a calendar year.  The median value is used as opposed to the average so that both extremely high and extremely low prices do not distort the prices for which homes are sold.  This measure does not take into account the assessed value of a property.	2013	29	t	f	2010, 2011, 2012	\N
29	35	dom	Median Number of Days on the Market	The median number of days that homes listed for sale sits on the public market in a given area.  This time period is from the date it is listed for sale till the day the contract of sale is signed.  Private (non-listed) home sale transactions are not included in this indicator.  The median days on market is used as opposed to the average so that both extremely high and extremely low days on the market do not distort the length of time for which homes are listed on the market.	2013	30	t	f	2010, 2011, 2012	\N
30	116	shomes	Number of Homes Sold	The portion of the homes and condominiums sold that were identified as being owned by the bank (REO) out of all residential properties sold in a calendar year.	2013	31	t	f	2010, 2011, 2012	\N
31	100	ownroc	Percentage of Housing Units that are Owner-Occupied	The percentage of homeowners that are the principal residents of a particular residential property out of all residential properties.  It is important to note that a portion of these owner-occupied properties may be subdivided and have tenants that pay rent and are not included in the calculation.	2013	32	t	f	2010, 2011, 2012	\N
32	46	fore	Percentage of Properties Under Mortgage Foreclosure	The percentage of properties where the  lending company or loan servicer has filed a foreclosure proceeding with the Baltimore City Circuit Court out of all residential properties within an area.  This is not a measure of actual foreclosures since not every property that receives a filing results in a property dispossession.	2013	33	t	f	2010, 2011, 2012	Maryland Property View
33	135	vacant	Percentage of Residential Properties that are Vacant and Abandoned	The percentage of residential properties that have been classified as being vacant and abandoned by the Baltimore City Department of Housing out of all properties.  Properties are classified as being vacant and abandoned if: the property is not habitable and appears boarded up or open to the elements; the property was designated as being vacant prior to the current year and still remains vacant; and the property is a multi-family structure where all units are considered to be vacant.	2013	34	t	f	2010, 2011, 2012	Maryland Property View
34	136	vio	Percentage of Residential Properties with Housing Violations (Excluding Vacants)	The percentage of residential properties that have received at least one housing code violation from the Baltimore City Department of Housing out of all properties.  Properties whose fa�ade, structure, and/or surrounding area violate the City�s Housing Code are issued a notice and are considered open till the property is found in compliance. A property may receive multiple violations.	2013	35	t	f	2010, 2011, 2012	Maryland Property View
35	112	resrehab	Percentage of Properties with Rehabilitation Permits Exceeding $5,000	The portion of residential properties that have applied for and received a permit to renovate the interior and/or exterior of a property where the cost of renovation will exceed $5,000.  The threshold of $5,000 is used to differentiate a minor and more significant renovation project.	2013	36	t	f	2010, 2011, 2012	Maryland Property View
36	125	totalres	Total Number of Residential Properties	The total number of residential properties located within an area as identified by Maryland Property View.  It is important to note that that this indicator is a count of properties (single family homes, condominiums, and duplexes) and that a property can be comprised of multiple housing units.	2013	37	t	f	2010, 2011, 2012	\N
37	24	cashsa	Percentage of Residential Sales for Cash	The portion of homes and condominiums sold for cash out of all residential properties sold in a calendar year. These types of sales tend to signify investor-based purchases as homes purchased for cash either become rental properties or later sold again in an effort to generate a profit.	2013	38	t	f	2010, 2011, 2012	\N
38	111	reosa	Percentage of Residential Sales in Foreclosure (REO)	The percentage of properties where the  lending company or loan servicer has filed a foreclosure proceeding with the Baltimore City Circuit Court out of all residential properties within an area.  This is not a measure of actual foreclosures since not every property that receives a filing results in a property dispossession.	2013	39	t	f	2010, 2011, 2012	\N
39	\N	\N	Percentage of Residential Tax Lien Sales	\N	2013	40	f	t	\N	\N
40	33	demper	Number of Demolition Permits per 1,000 Residential Properties	The number of permits issued for the demolition of residential buildings per 1,000 existing residential properties.  The permits are analyzed by date of issue and not date of actual demolition.	2013	41	t	f	2011, 2012	Maryland Property View
41	30	constper	Number of New Construction Permits per 1,000 Residential Properties	The number of permits issued for new residential buildings per 1,000 existing residential properties within a community.  The permits are analyzed by date of issue and not date of completion.	2013	42	t	f	2011, 2012	Maryland Property View
42	15	baltvac	Percentage of Vacant Properties Owned by Baltimore City	The percent of properties that are classified as being vacant and abandoned that are owned by Baltimore City.  Baltimore City has come to own these properties through a variety of ways including (but not limited to) eminent domain, unpaid tax or water bills, and purchase	2013	43	t	f	2011, 2012	Maryland Property View
43	10	affordm	Affordability Index - Mortgage	The percentage of households that pay more than 30% of their total household income on mortgage and other housing-related expenses	2013	44	t	f	2009-2013	\N
44	11	affordr	Affordability Index - Rent	The percentage of households that pay more than 30% of their total household income on rent and related expenses out of all households in an area.	2013	45	t	f	2009-2013	\N
45	59	histax	Number of Historic Tax Credits per 1,000 Residential Units	The number of residential properties that received the Historic Tax Credit per 1,000 residential properties within an area.  The credit is granted on the increased assessment directly resulting from qualified improvements.  The duration of the credit is for 10 years, and is applicable to properties located in designated areas of significant historical value.	2013	46	t	f	\N	\N
192	\N	\N	Percent  of persons by occupation classification (major classifications)	\N	2013	193	f	t	\N	\N
46	60	homtax	Number of Homestead Tax Credits per 1,000 Residential Units	The number of residential properties that received the homestead tax credit per 1,000 residential properties within an area.  The Homestead Credit limits the increase in taxable assessments each year to a fixed percentage. Every county and municipality in Maryland is required to limit taxable assessment increases to 10% or less each year, with the Baltimore City rate capped at 4%.	2013	47	t	f	2011, 2012	Maryland Property View
47	101	owntax	Number of Homeowner's Tax Credits per 1,000 Residential Units	The number of residential properties that received the homeowners tax credit per 1,000 residential properties within an area.  The homeowner�s tax credit sets a limit on the amount of property taxes any homeowner must pay based upon his or her income.	2013	48	t	f	2011, 2012	Maryland Property View
48	96	nomail	Percent Residential Properties that do Not Receive Mail	The percentage of residential addresses for which the United States Postal Service has identified as being unoccupied (no mail collection) for a period of at least 90 days or longer.  These properties may be habitable, but are not currently being occupied.  It is important to note that a single residential property can contain more than one address.	2013	49	t	f	2010, 2011, 2012	\N
49	32	crime	Part 1 Crime Rate per 1,000 Residents	The part 1 crime rate captures incidents of homicide, rape, aggravated assault, robbery, burglary, larceny, and auto theft that are reported to the Police Department. These incidents are per 1,000 residents in the neighborhood to allow for comparison across areas.	2013	50	t	f	2010, 2011, 2012	U.S. Bureau of the Census
50	\N	\N	Percentage of Part 1 Crimes that Occur During Daytime	\N	2013	51	f	t	\N	\N
51	137	viol	Violent Crime Rate per 1,000 Residents	The violent crime rate measures the number of Part 1 crimes identified as being violent (homicide, rape, aggravated assault, and robbery) that are reported to the Police Department. These incidents are per 1,000 residents in the neighborhood to allow for comparison across areas.	2013	52	t	f	2010, 2011, 2012	U.S. Bureau of the Census
52	104	prop	Property Crime Rate per 1,000 Residents	The property crime rate measures the number of Part 1 crimes identified as being property-based (burglary and auto theft) that are reported to the Police Department. These incidents are per 1,000 residents in the neighborhood to allow for comparison across areas.	2013	53	t	f	2010, 2011, 2012	U.S. Bureau of the Census
53	36	domvio	Domestic Violence Calls For Service per 1,000 Residents	The rate of calls to emergency 911 for domestic violence per 1,000 residents in an area. Calls for service are used rather than actual crime incidents since domestic violence can be classified as one of several types of criminal offenses. It is important to also note that not every case of domestic violence is reported and some claims of abuse may be unfounded.	2013	54	f	f	2010, 2011, 2012	U.S. Bureau of the Census
54	69	juvarr	Juvenile Arrest Rate per 1,000 Juveniles	The number of persons aged 10 to 17 arrested per 1,000 juveniles that live in an area. This indicator is calculated by where the arrested juvenile was arrested and not by where the crime is committed. Arrests are used instead of crimes committed since not all juveniles that are arrested are charged with committing a crime. This indicator also excludes offenders who are later charged as adults for their crime(s).	2013	55	f	f	2011, 2012	U.S. Bureau of the Census
55	71	juvviol	Juvenile Arrest Rate for Violent Offenses per 1,000 Juveniles	The number of persons aged 10 to 17 arrested for violent offenses per 1,000 juveniles that live in an area. Violent offenses may include homicide, rape, assault (with or without a weapon), and robbery. This indicator is calculated by where the arrested juvenile was arrested and not by where the crime is committed. Arrests are used instead of crimes committed since not all juveniles that are arrested are charged with committing a crime. This indicator also excludes offenders who are later charged as adults for their crime(s).	2013	56	f	f	2011, 2012	U.S. Bureau of the Census
56	70	juvdrug	Juvenile Arrest Rate for Drug-Related Offenses per 1,000 Juveniles	The number of persons aged 10 to 17 for drug-related offenses per 1,000 juveniles that live in an area. Drug-related offenses include arrests for possession, sale, manufacture, or abuse of illegal drugs, including alcohol. This indicator is calculated by where the arrested juvenile was arrested and not by where the crime is committed. Arrests are used instead of crimes committed since not all juveniles that are arrested are charged with committing a crime. This indicator also excludes offenders who are later charged as adults for their crime(s).	2013	57	f	f	2011, 2012	U.S. Bureau of the Census
57	117	shoot	Number of Shootings per 1,000 Residents	The rate of 911 calls for shootings per 1,000 residents in an area. Since the data comes from 911 calls, it is possible that multiple calls could be made for a single incident.	2013	58	f	f	2010, 2011, 2012	U.S. Bureau of the Census
58	47	gunhom	Number of Gun-Related Homicides per 1,000 Residents	The rate of homicides by firearm as reported in the Part 1 crime data per 1,000 residents in an area.	2013	59	t	f	2010, 2011, 2012	U.S. Bureau of the Census
59	25	caslt	Number of Common Assault Calls for Service per 1,000 Residents	The rate of calls for assaults that do not involve a weapon per 1,000 residents in an area. Since the data comes from 911 calls, it is possible that multiple calls could be made for a single incident.	2013	60	f	f	2010, 2011, 2012	U.S. Bureau of the Census
60	91	narc	Number of Narcotics Calls for Service per 1,000 Residents	The rate of calls for narcotics per 1,000 residents in an area. Since the data comes from 911 calls, it is possible that multiple calls could be made for a single incident.	2013	61	f	f	2010, 2011, 2012	U.S. Bureau of the Census
61	22	caracc	Number of Automobile Accident Calls for Service per 1,000 Residents	The rate of calls for accidents involving motor vehicles per 1,000 residents in an area. Since the data comes from 911 calls, it is possible that multiple calls could be made for a single incident. Additionally, not every accident involving a motor vehicle is reported to the Police Department.	2013	62	f	f	2010, 2011, 2012	U.S. Bureau of the Census
62	\N	\N	Rate of Fire and EMS Calls for Service per 1,000 Residents	\N	2013	63	f	t	\N	\N
63	\N	\N	Average Fire and EMS Response Time	\N	2013	64	f	t	\N	\N
64	\N	\N	Number of Children Enrolled in Head Start Programs	\N	2013	65	f	t	\N	\N
65	39	eattend	Number of Students Ever Attended 1st - 5th Grade	The number of children who have registered for and attend 1st through 5th grade at a Baltimore City Public School at any point during the school year.	2013	66	t	f	2009-2010, 2010-2011, 2012	\N
66	81	mattend	Number of Students Ever Attended 6th - 8th Grade	The number of children who have registered for and attend 6th through 8th grade at a Baltimore City Public School at any point in the school year.	2013	67	t	f	2009-2010, 2010-2011, 2012	\N
252	104	prop	Property Crime Rate per 1,000 Residents	\N	2012	53	t	f	2010, 2011, 2012	U.S. Bureau of the Census
67	65	hsattend	Number of Students Ever Attended 9th - 12th Grade	The number of children who have registered for and attend 9th through 12th grade at a Baltimore City Public School at any point in the school year.	2013	68	t	f	2009-2010, 2010-2011, 2012	\N
68	\N	\N	Percent of Students Enolled in CTE Programs	\N	2013	69	f	t	\N	\N
69	6	aastud	Percent of Students that are African American (non-Hispanic)	The percentage of Black/African American students of any grade that attend any Baltimore City Public School out of all public school students within an area in a school year.	2013	70	t	f	2009-2010, 2010-2011, 2012	\N
70	144	wstud	Percent of Students that are White (non-Hispanic)	The percentage of white (non-Hispanic) students of any grade that attend any Baltimore City Public School out of all public school students within an area in a school year.	2013	71	t	f	2009-2010, 2010-2011, 2012	\N
71	68	hstud	Percent of Students that are Hispanic	The percentage of students of any grade level who identify their ethnicity as being Hispanic that attend any Baltimore City Public School out of all public school students within an area in a school year. Ethnicity is separate from a student�s race.	2013	72	t	f	2009-2010, 2010-2011, 2012	\N
72	7	abse	Percent of 1st-5th Grade Students that are Chronically Absent (Missing at least 20 days)	The percentage of 1st-5th grade students that were recognized as being absent from public school 20 or more days out of all students.	2013	73	t	f	2009-2010, 2010-2011, 2012	\N
73	9	absmd	Percent of 6th-8th Grade Students that are Chronically Absent (Missing at least 20 days)	The percentage of 6th-8th grade students that were recognized as being absent from public school 20 or more days out of all students.	2013	74	t	f	2009-2010, 2010-2011, 2012	\N
74	8	abshs	Percent of 9th-12th Grade Students that are Chronically Absent (Missing at least 20 days)	The percentage of 9th-12th grade students that were recognized as being absent from public school 20 or more days out of all students.	2013	75	t	f	2009-2010, 2010-2011, 2012	\N
75	121	susp	Percentage of Students Suspended or Expelled During School Year	The percentage of students of any grade level that are formally suspended or expelled for any reason during the school year out of all public school students within an area.	2013	76	t	f	2009-2010, 2010-2011, 2012	\N
76	44	farms	Percentage of Students Receiving Free or Reduced Meals	The percentage of students of any grade that are eligible for and receive free or reduced school meals out of all public school students. Eligibility for this program is based on the student�s household income.	2013	77	t	f	2009-2010, 2010-2011, 2012	\N
77	120	sped	Percentage of Students Enrolled in Special Education Programs	The percentage of students of any grade that are eligible for and participating in public school special education programs out of all students. This includes all students with any diagnosed disability	2013	78	t	f	2009-2010, 2010-2011, 2012	\N
78	\N	\N	Percentage of Students Enrolled in After School Programs	\N	2013	79	f	t	\N	\N
79	109	ready	Kindergarten School Readiness	The percentage of children whose composite score indicates full school readiness out of all kindergarten school children tested within an area in a school year. The Maryland Model for School Readiness (MMSR) is an assessment and instructional system that was designed to provide parents, teachers, and early childhood providers with a common understanding of what children know and are able to do upon entering school. Under the MMSR system, all children entering kindergarten are assessed for level of mastery across several learning domains. These domains include: social and personal development; language and literacy; mathematical thinking; scientific thinking; social studies; the arts; and physical development and health. Kindergarten teachers must evaluate students during the first few months of the kindergarten year using selected Work Sampling System (WSS) indicators and report their ratings by the end of November of each year to the state.	2013	80	t	f	2010-2011, 2012	\N
80	78	math3	Percentage of 3rd Grade Students Passing MSA Math	The percentages of students passing M.S.A. exams in reading and mathematics in 3rd, 5th, and 8th grades. Maryland School Assessment (MSA) scores measure the number of students scoring in one of three classifications out of all students enrolled in that grade. Students can either be rated as advanced, proficient, or having basic knowledge of a subject. This indicator includes only those students who have tested as advanced or proficient.	2013	81	t	f	2009-2010, 2010-2011, 2012	\N
81	106	read3	Percentage of 3rd Grade Students Passing MSA Reading	The percentages of students passing M.S.A. exams in reading and mathematics in 3rd, 5th, and 8th grades. Maryland School Assessment (MSA) scores measure the number of students scoring in one of three classifications out of all students enrolled in that grade. Students can either be rated as advanced, proficient, or having basic knowledge of a subject. This indicator includes only those students who have tested as advanced or proficient.	2013	82	t	f	2009-2010, 2010-2011, 2012	\N
82	79	math5	Percentage of 5th Grade Students Passing MSA Math	The percentages of students passing M.S.A. exams in reading and mathematics in 3rd, 5th, and 8th grades. Maryland School Assessment (MSA) scores measure the number of students scoring in one of three classifications out of all students enrolled in that grade. Students can either be rated as advanced, proficient, or having basic knowledge of a subject. This indicator includes only those students who have tested as advanced or proficient.	2013	83	t	f	2009-2010, 2010-2011, 2012	\N
83	107	read5	Percentage of 5th Grade Students Passing MSA Reading	The percentages of students passing M.S.A. exams in reading and mathematics in 3rd, 5th, and 8th grades. Maryland School Assessment (MSA) scores measure the number of students scoring in one of three classifications out of all students enrolled in that grade. Students can either be rated as advanced, proficient, or having basic knowledge of a subject. This indicator includes only those students who have tested as advanced or proficient.	2013	84	t	f	2009-2010, 2010-2011, 2012	\N
84	80	math8	Percentage of 8th Grade Students Passing MSA Math	The percentages of students passing M.S.A. exams in reading and mathematics in 3rd, 5th, and 8th grades. Maryland School Assessment (MSA) scores measure the number of students scoring in one of three classifications out of all students enrolled in that grade. Students can either be rated as advanced, proficient, or having basic knowledge of a subject. This indicator includes only those students who have tested as advanced or proficient.	2013	85	t	f	2009-2010, 2010-2011, 2012	\N
85	108	read8	Percentage of 8th Grade Students Passing MSA Reading	The percentages of students passing M.S.A. exams in reading and mathematics in 3rd, 5th, and 8th grades. Maryland School Assessment (MSA) scores measure the number of students scoring in one of three classifications out of all students enrolled in that grade. Students can either be rated as advanced, proficient, or having basic knowledge of a subject. This indicator includes only those students who have tested as advanced or proficient.	2013	86	t	f	2009-2010, 2010-2011, 2012	\N
86	63	hsaeng	Percentage of Students Passing H.S.A. English	The percentage of high school students who have successfully passed the H.S.A. exams out of all high school students that took the exam in the school year (considering only the highest score per subject area). In Maryland, all students who entered 9th grade in or after 2005 are required to take and pass the High School Assessments (H.S.A.) in order to graduate, including students in special education, English language learners (ELLs), and students with 504 plans. There are currently three H.S.A. exams: English, Algebra/Data Analysis; and Biology (a H.S.A. in Government has since been discontinued). Students can retake the HSAs as many times as necessary to pass.	2013	87	t	f	2009-2010, 2010-2011, 2012	\N
87	62	hsabio	Percentage of Students Passing H.S.A. Biology	The percentage of high school students who have successfully passed the H.S.A. exams out of all high school students that took the exam in the school year (considering only the highest score per subject area). In Maryland, all students who entered 9th grade in or after 2005 are required to take and pass the High School Assessments (H.S.A.) in order to graduate, including students in special education, English language learners (ELLs), and students with 504 plans. There are currently three H.S.A. exams: English, Algebra/Data Analysis; and Biology (a H.S.A. in Government has since been discontinued). Students can retake the HSAs as many times as necessary to pass.	2013	88	t	f	2009-2010, 2010-2011, 2012	\N
88	64	hsagov	Percentage of Students Passing H.S.A. Government	The percentage of high school students who have successfully passed the H.S.A. exams out of all high school students that took the exam in the school year (considering only the highest score per subject area). In Maryland, all students who entered 9th grade in or after 2005 are required to take and pass the High School Assessments (H.S.A.) in order to graduate, including students in special education, English language learners (ELLs), and students with 504 plans. There are currently three H.S.A. exams: English, Algebra/Data Analysis; and Biology (a H.S.A. in Government has since been discontinued). Students can retake the HSAs as many times as necessary to pass.	2013	89	t	f	2009-2010, 2010-2011, 2012	\N
89	61	hsaalg	Percentage of Students Passing H.S.A. Algebra	The percentage of high school students who have successfully passed the H.S.A. exams out of all high school students that took the exam in the school year (considering only the highest score per subject area). In Maryland, all students who entered 9th grade in or after 2005 are required to take and pass the High School Assessments (H.S.A.) in order to graduate, including students in special education, English language learners (ELLs), and students with 504 plans. There are currently three H.S.A. exams: English, Algebra/Data Analysis; and Biology (a H.S.A. in Government has since been discontinued). Students can retake the HSAs as many times as necessary to pass.	2013	90	t	f	2009-2010, 2010-2011, 2012	\N
90	37	drop	High School Dropout/Withdrawl Rate	The percentage of 9th through 12th graders who withdraw from public school out of all high school students in a school year. Withdraw codes are used as a proxy for dropping out of school based upon the expectation that withdrawn students are no longer receiving educational services. A dropout is defined as a student who, for any reason other than death, leaves school before graduation or the completion of a Maryland-approved education program and is not known to enroll in another school or State-approved program during a current school year.	2013	91	t	f	2009-2010, 2010-2011, 2012	\N
91	28	compl	High School Completion Rate	The percentage of 12th graders in a school year that successfully completed high school out of all 12th graders within an area. Completers are identified as completing their program of study at the high school level and satisfying the graduation requirements for a Maryland High School Diploma or the requirements for a Maryland Certificate of Program Completion	2013	92	t	f	2009-2010, 2010-2011, 2012	\N
92	\N	\N	Persons Receiving a GED	\N	2013	93	f	t	\N	\N
93	115	sclsw	Percent of Students Switching Schools within School Year	The percentage of 1st through 12th graders who change schools out of all students in a school year. Students must have attended both schools for which they were registered for at least one day.  Additionally, this indicator only identifies the share of students that change schools for any reasons and not the frequency, number of school switches, or change in residences in a school year.  The percentage reflects the last home address available for the student who changed schools.  This may or may not be the home address provided for the first school that they are registered to attend.	2013	94	t	f	2010-2011, 2012	\N
94	\N	\N	Percentage of Students Attending Zoned School	\N	2013	95	f	f	\N	\N
95	\N	\N	Average Distance Travelled to School (6th-8th Grade)	\N	2013	96	f	t	\N	\N
96	\N	\N	Average Distance Travelled to School (9th-12th Grade)	\N	2013	97	f	t	\N	\N
97	114	sclemp	Percentage of Population aged 16-19 in School and/or Employed	The percentage of persons aged 16 to 19 who are in school and/or are employed out of all persons in their age cohort.	2013	98	t	f	2009-2013	\N
98	123	teenbir	Teen Pregnancy Rate per 1,000 Females (aged 15-19)	The rate of female teens aged 15-19 that gave birth per 1,000 females aged 15-19.	2013	99	t	f	2010, 2011, 2012	U.S. Bureau of the Census
99	124	termbir	Percent of Births Delivered at Term (37-42 Weeks)	The percentage of births delivered at term measures the percentage of births in a calendar year where the baby is delivered between 37 and 42 weeks of gestation.	2013	100	t	f	2010, 2011, 2012	U.S. Bureau of the Census
100	17	birthwt	Percent of Babies Born with a Satisfactory Birth Weight	The percentage of children born with a birth weight of at least 5 � pounds out of all births in the area.	2013	101	t	f	2010, 2011, 2012	U.S. Bureau of the Census
101	103	prenatal	Percent of Births Where the Mother Received Early Prenatal Care (First Trimester)	The percentage of births where the mother received prenatal care during the first trimester of the pregnancy in a calendar year out of all births within an area. This information is calculated by the Vital Statistics registration information collected from each live birth.	2013	102	t	f	2010, 2011, 2012	U.S. Bureau of the Census
102	72	leadtest	Number of Children (aged 0-6) Tested for Elevated Blood Lead Levels	This indicator reflects the total number of children aged 0-6 who are tested for the presence of blood lead in a calendar year.	2013	103	t	f	2010, 2011, 2012	\N
103	40	ebll	Percent of Children (aged 0-6) with Elevated Blood Lead Levels	The number of children aged 0-6 that are found to either have elevated blood lead levels  (?10Mg/dL) or lead poisoning (?20 Mg/dL) out of the number of children tested within an area in a calendar year.	2013	104	t	f	2010, 2011, 2012	\N
104	\N	leadv	Percent of Lead Violations per 1,000 Residential Units	\N	2013	105	f	f	2011, 2012	Maryland Property View
193	99	othrcom	Percent of Population Using Other Means to Commute to Work (Taxi, Motorcycle, Bicycle, Other)	The percentage of commuters that use other means to travel to work out of all commuters aged 16 and above.	2013	194	t	f	2009-2013	\N
105	122	tanf	Percent of Families Receiving TANF	Temporary Assistance for Needy Families (TANF) is a federal assistance program. The Act provides temporary financial assistance while aiming to get people off of that assistance, primarily through employment.	2013	106	t	f	2011, 2012	U.S. Bureau of the Census
106	\N	\N	Percent of Persons receiving SNAP	\N	2013	107	f	t	\N	\N
107	\N	\N	Fetal Mortality Rate	\N	2013	108	f	t	\N	\N
108	77	liquor	Liquor Outlet density (per 1,000 Residents)	This indicator reflects the number of business establishments that possess a Class A (Off Sale package goods no on-premises consumption - 6 days, 6:00 a.m.- Midnight. No Sunday sales except Sundays between Thanksgiving Day and New Year's Day upon issuance of a special license for each Sunday) or BD7 (tavern) business license that allows them to sell beer, wine, or liquor. Other liquor licenses to restaurants or on-premise consumption were not included in this analysis. This number is provided by 1,000 residents to allow for comparison across neighborhoods	2013	109	t	f	2010, 2011, 2012	U.S. Bureau of the Census
109	45	fastfd	Fast Food Outlet Density (per 1,000 Residents)	The Johns Hopkins Center for a Livable Future (CLF) obtained the food permit list from the Baltimore City Health Department in August 2011, which includes all sites that sell food, such as stores, restaurants and temporary locations such as farmers� market stands and street carts. The restaurants were grouped into three categories, including full service restaurants, fast food chains and carryouts. Carryout and fast food chain restaurants were extracted from the restaurant layer and spatially joined with the 2010 Community Statistical Area (CSA) data layer, provided by BNIA-JFI. The prepared foods density, per 1,000 people, was calculated for each CSA using the CSA�s population and the total number of carryout and fast food restaurants, including vendors selling prepared foods in public markets, in each CSA.	2013	110	t	f	2011, 2012	\N
110	\N	\N	Number of Persons calling UWCM 211 for Health-Related Services	\N	2013	111	f	t	\N	\N
111	\N	\N	Rate of STDs per 1,000 Residents (Chlamydia, Gonorrhea, and Syphilis)	\N	2013	112	f	t	\N	\N
112	\N	\N	Rate of HIV/AIDS per 1,000 Residents	\N	2013	113	f	t	\N	\N
113	76	lifexp	Life Expectancy	The average number of years a newborn can expect to live, assuming he or she experiences the currently prevailing rates of death through their lifespan.	2013	114	t	f	2011, 2012	\N
114	85	mort1_	Infant Mortality	The number of infant deaths (babies under one year of age) per 1,000 live births within the area in a five year period.  This is the most stable and commonly measured indicator of mortality in this age group.	2013	115	t	f	2011, 2012	\N
115	84	mort14_	Mortality by Age (1-14 years old)	The number of deaths of persons between the ages of one and 14 per 10,000 persons within the area in a five year period.	2013	116	t	f	2011, 2012	\N
116	86	mort24_	Mortality by Age (15-24 years old)	The number of deaths of persons between the ages of 15 and 24 per 10,000 persons within the area in a five year period.	2013	117	t	f	2011, 2012	\N
117	87	mort44_	Mortality by Age (25-44 years old)	The number of deaths of persons between the ages of 25 and 44 per 10,000 persons within the area in a five year period	2013	118	t	f	2011, 2012	\N
118	88	mort64_	Mortality by Age (45-64 years old)	The number of deaths of persons between the ages of 45 and 64 per 10,000 persons within the area in a five year period.	2013	119	t	f	2011, 2012	\N
119	89	mort84_	Mortality by Age (65-84 years old)	The number of deaths of persons between the ages of 65 and 84 per 10,000 persons within the area in a five year period.	2013	120	t	f	2011, 2012	\N
120	90	mort85_	Mortality by Age (85 and over)	The number of deaths of persons 85 years and older per 10,000 persons within the area in a five year period.	2013	121	t	f	2011, 2012	\N
121	\N	\N	Causes of Death (analysis of top causes)	\N	2013	122	f	t	\N	\N
122	\N	\N	Causes of Death (analysis of top causes)	\N	2013	123	f	t	\N	\N
123	\N	\N	Causes of Death (analysis of top causes)	\N	2013	124	f	t	\N	\N
124	\N	\N	Causes of Death (analysis of top causes)	\N	2013	125	f	t	\N	\N
125	\N	\N	Causes of Death (analysis of top causes)	\N	2013	126	f	t	\N	\N
126	\N	\N	Percent of persons with health insurance	\N	2013	127	f	t	\N	\N
127	74	libcard	Number of Persons with Library Cards per 1,000 Residents	The rate of persons per 1,000 residents that possess a valid public library system card. This includes all library card types (first card, juvenile, young adult, adult).	2013	128	t	f	2011, 2012	U.S. Bureau of the Census
128	\N	\N	Number of Event Permits Requested per 1,000 Residents	\N	2013	129	f	t	\N	\N
129	\N	\N	Public Art per 1,000 Residents	\N	2013	130	f	t	\N	\N
130	12	artbus	Number of Businesses that are Arts-Related per 1,000 residents	The rate of businesses (both for-profit and non-profit) that are related to arts and culture per 1,000 residents.  These industries are identified by their primary NAICS code and include the following: theatre companies and dinner theaters (711110), dance companies (711120), musical groups and artists (711130), other performing arts companies (711190), motion picture theaters (52131), museums (712110), historical sites (712120), zoos and botanical gardens (712130), nature parks (712190), art schools (611610), independent artists (711510), bookstores (451211), music stores (451220), video rental stores (532230), and retail art dealerships (453920).	2013	131	t	f	2010, 2011, 2012	U.S. Bureau of the Census
131	13	artemp	Total Employment in Arts-Related Businesses	The number of persons employed in arts-related businesses (both for-profit and non-profit). This number does not count those persons who identify themselves as being artists and does not count sole proprietorships or persons who work part-time in the arts. The same industries are used to determine the rate of arts-related businesses.	2013	132	t	f	2010, 2011, 2012	\N
132	\N	\N	Percentage of Businesses that are Non-Profits	\N	2013	133	f	t	\N	\N
133	43	empl	Percent  Population 16-64 Employed	The number of persons between the ages of 16 and 64 formally employed or self-employed and earning a formal income. It is used to understand how many persons are working out of the entire population, not just those in the labor force (persons who may be looking for work or working).	2013	134	t	f	2009-2013	\N
134	133	unempl	Percent  Population 16-64 Unemployed and Looking for Work	The number of persons between the ages of 16 and 64 not working out of all persons, not just those in the labor force (persons who may be looking for work). These persons are seeking work that pays a formal income.	2013	135	t	f	2009-2013	\N
194	41	eenrol	Number of Students Officially Enrolled in 1st - 5th Grade	The number of children who have registered for and attend 1st through 5th grade at a Baltimore City Public School as of September 30th. This count only includes students enrolled in public schools.	2013	195	t	f	2009-2010, 2010-2011, 2012	\N
253	36	domvio	Domestic Violence Calls For Service per 1,000 Residents	\N	2012	54	f	f	2010, 2011, 2012	U.S. Bureau of the Census
135	95	nilf	Percent  Population 16-64 Not in Labor Force	The number of persons who are not in the labor force out of all persons between the ages of 16 and 64 in the area. There are several reasons why persons may not be included in the labor force. These reasons may include: they are caretakers for children or other family members; they attend school or job training; they may have a disability; and they are discouraged or frustrated and have given up seeking a job or have a history that may include criminal activity.	2013	136	t	f	2009-2013	\N
136	134	unempr	Unemployment Rate	The number of persons between the ages of 16 and 64 that are in the labor force (and are looking for work) but are not currently working.	2013	137	t	f	2009-2013	\N
137	73	lesshs	Percent  Population (25 years and over) With Less Than a High School Diploma or GED	The percentage of persons that have not completed, graduated, or received a high school diploma or GED. This is a standard indicator used to measure the portion of the population with less than a basic level of skills needed for the workplace. Persons under the age of 25 are not included in this analysis since many of these persons are still attending various levels of schooling.	2013	138	t	f	2009-2013	\N
138	66	hsdipl	Percent  Population (25 years and over) With High School Diploma and Some College or Associates Degree	The percentage of persons that have completed, graduated, or received a high school diploma or GED and also has taken some college courses or completed their Associate's degree. This is a standard indicator used to measure the portion of the population with a basic level of skills needed for the workplace. Persons under the age of 25 are not included in this analysis since many of these persons are still attending various levels of schooling.	2013	139	t	f	2009-2013	\N
139	119	somecol	Percent  Population (25 years and over) with a Bachelor's Degree or Above	The percentage of persons that have completed, graduated, or received a Bachelor�s or an advanced degree. This is an indicator used to measure the portion of the population having an advanced level of skills needed for the workplace. Persons under the age of 25 are not included in this analysis since many of these persons are still attending various levels of schooling.	2013	140	t	f	2009-2013	\N
140	29	comprop	Total Number of Commercial Properties	The total number of commercial properties located within an area in a particular year.	2013	141	t	f	2010, 2011, 2012	\N
141	31	crehab	Percent of Commercial Properties with Rehab Permits Above $5,000	The percentage of properties that are investing within their current establishment and not the level of their investment. Permits for work below $5,000 are considered to be minor and not included in this indicator. A single establishment can apply for and receive multiple permits.	2013	142	t	f	2010, 2011, 2012	Maryland Property View
142	98	numbus	Total Number of Businesses	The total number of businesses (both for-profit and non-profit) within an area at a single time in a year.	2013	143	t	f	2010, 2011, 2012	\N
143	126	totemp	Total Number of Employees	The total number of persons employed by businesses (both for-profit and non-profit) within an area at a single time in a year.	2013	144	t	f	2010, 2011, 2012	\N
144	118	smlbus	Number of Businesses with Under 50 Employees	The total number of businesses (both for-profit and non-profit) that report having less than 50 persons employed within an area at a single time in a year.	2013	145	t	f	2010, 2011, 2012	\N
145	143	wrkout	Percent of Employed Residents who Work Outside the City	The percentage of workers that are employed by jobs located outside of Baltimore City. Only persons who report being employed and are at least 16 years old are included in the analysis.	2013	146	f	f	2010	\N
146	\N	\N	CRA data (residential and commercial)	\N	2013	147	f	t	\N	\N
147	\N	\N	CRA data (residential and commercial)	\N	2013	148	f	t	\N	\N
148	16	banks	Number of Banks and Bank Branches per 1,000 Residents	The number of banks and bank branches per 1,000 residents within an area.	2013	149	t	f	2011, 2012	U.S. Bureau of the Census
149	18	biz1_	Percent of Businesses that are 1 year old or less	The percentage of businesses (both for-profit and non-profit) that report their establishment as being one year old or less. The age of the business is determined by the year that the first year they appeared in the InfoUSA database.	2013	150	t	f	2010, 2011, 2012	\N
150	19	biz2_	Percent of Businesses that are 2 years old or less	The percentage of businesses (both for-profit and non-profit) that report their establishment as being two years old or less. The age of the business is determined by the year that the first year they appeared in the business database.	2013	151	t	f	2010, 2011, 2012	\N
151	20	biz4_	Percent of Businesses that are 4 years old or less	The percentage of businesses (both for-profit and non-profit) that report their establishment as being four years old or less. The age of the business is determined by the year that the first year they appeared in the business database. A business that has been in operation more than four years has a greater likelihood of remaining open for a longer period of time.	2013	152	t	f	2010, 2011, 2012	\N
152	102	prbprl	Percent of Adult Population on Parole/Probation	The percentage of the population age 18 and older that are on parole or probation.	2013	153	t	t	\N	\N
153	\N	\N	Percent of CSA that is Either Low or Moderate income (by Census tract)	\N	2013	154	f	t	\N	\N
154	\N	\N	Percent  of persons in MOED training programs (per 1,000 residents)	\N	2013	155	f	t	\N	\N
155	\N	\N	Percent of Population with Broadband Internet Access	\N	2013	156	f	t	\N	\N
156	94	neiind	Number of Businesses by Selected Neighborhood Industry (NAICS Sectors)	The number of businesses (both for-profit and non-profit) that provide products and services to local residents. The industries included in this indicator are: Retail Trade (NAICS 44-45); Finance and Insurance (NAICS 52); Professional, Scientific, and Technical Services (NAICS 54); Health Care and Social Assistance (NAICS 62); Arts, Entertainment, and Recreation (NAICS 71); Accommodation and Food Services (NAICS 72); and Other Services except Public Administration (NAICS 81). The primary industry reported by each business was used to determine their inclusion.	2013	157	t	f	2010, 2011, 2012	\N
157	92	neibus	Neighborhood Businesses per 1,000 residents (NAICS Sectors)	The number of businesses (both for-profit and non-profit) that provide products and services to local residents per 1,000. The industries included in this indicator are: Retail Trade (NAICS 44-45); Finance and Insurance (NAICS 52); Professional, Scientific, and Technical Services (NAICS 54); Health Care and Social Assistance (NAICS 62); Arts, Entertainment, and Recreation (NAICS 71); Accommodation and Food Services (NAICS 72); and Other Services except Public Administration (NAICS 81). The primary industry reported by each business was used to deter-mine their inclusion.	2013	158	t	f	2010, 2011, 2012	\N
251	137	viol	Violent Crime Rate per 1,000 Residents	\N	2012	52	t	f	2010, 2011, 2012	U.S. Bureau of the Census
314	85	mort1_	Infant Mortality	\N	2012	115	t	f	2011, 2012	\N
158	93	neiemp	Total number of Employees by Selected Neighborhood Industry (NAICS Sectors)	The number of persons employed by businesses (both for-profit and non-profit) that provide products and services to local residents. The industries included in this indicator are: Retail Trade (NAICS 44-45); Finance and Insurance (NAICS 52); Professional, Scientific, and Technical Services (NAICS 54); Health Care and Social Assistance (NAICS 62); Arts, Entertainment, and Recreation (NAICS 71); Accommodation and Food Services (NAICS 72); and Other Services except Public Administration (NAICS 81). The primary industry reported by each business was used to determine their inclusion. The persons employed by these businesses may not necessarily live in the neighborhood where the business is located.	2013	159	t	f	2010, 2011, 2012	\N
159	110	regvote	Percent of Population (Over the age of 18) Who are Registered to Vote	The percentage of persons over the age of 18 registered to vote out of all persons 18 years and over..	2013	160	f	f	2010, 2012	\N
160	138	voted	Percent Population (Over the age of 18) Who Voted in the General Election	The percentage of persons who voted in the last general election out of all registered voters	2013	161	f	f	2010, 2012	\N
161	34	dirtyst	Rate of Dirty Streets and Alleys Reports per 1,000 Residents	The rate of service requests for dirty streets and alleys through Baltimore�s 311 system per 1,000 residents. More than one service request may be made for the same issue but is logged as a unique request.	2013	162	t	f	2010, 2011, 2012	U.S. Bureau of the Census
162	26	clogged	Rate of Clogged Storm Drain Reports per 1,000 Residents	The rate of service requests for addressing clogged storm drains made through Baltimore�s 311 system per 1,000 residents.  More than one service request may be made for the same issue but is logged as a unique request.	2013	163	t	f	2010, 2011, 2012	U.S. Bureau of the Census
163	38	drvalone	Percent of Population that Drove Alone to Work	The percentage of commuters driving alone out of all commuters aged 16 and above.	2013	164	t	f	2009-2013	\N
164	23	carpool	Percent of Population that Carpool to Work	The percentage of commuters that carpool out of all commuters aged 16 and above.	2013	165	t	f	2009-2013	\N
165	105	pubtran	Percent of Population that Uses Public Transportation to Get to Work	The percentage of commuters that use public transit out of all commuters aged 16 and above.	2013	166	t	f	2009-2013	\N
166	139	walked	Percent of Population that Walks to Work	The percentage of commuters that walk to work out of all commuters aged 16 and above.	2013	167	t	f	2009-2013	\N
167	127	trav14_	Percent of Employed Population with Travel Time to Work of 0-14 Minutes	The percentage of commuters that spend less than 15 minutes commuting to work out of all commuters aged 16 and above.	2013	168	t	f	2009-2013	\N
168	128	trav29_	Percent of Employed Population with Travel Time to Work of 15-29 Minutes	The percentage of commuters that spend between 15 and 29 minutes commuting to work out of all commuters aged 16 and above.	2013	169	t	f	2009-2013	\N
169	129	trav44_	Percent of Employed Population with Travel Time to Work of 30-44 Minutes	The percentage of commuters that spend between 30 and 44 minutes travelling to work out of all commuters aged 16 and above.	2013	170	t	f	2009-2013	\N
170	130	trav45_	Percent of Employed Population with Travel Time to Work of 45 Minutes and Over	The percentage of commuters that spend more than 45 minutes travelling to work out of all commuters aged 16 and above.	2013	171	t	f	2009-2013	\N
171	132	trees	Percent of Area Covered by Trees	The percent of total land area comprised of tree canopy. The primary sources for this land cover layer were 2004 pan-sharpened 1m Ikonos satellite imagery, a normalized Digital Surface Model (nDSM) derived from 2006 LiDAR data, and LiDAR intensity data resulting from the 2006 acquisition. Other sources of data include the City's planimetric GIS database (building footprints and road casing polygons). The land cover classification was performed using automated object-based image analysis (OBIA) techniques in Definiens Developer/eCognition Server. No accuracy assessment was conducted, but the dataset was thoroughly reviewed at a scale of 1:2000. Over 370 corrections were made to the classification.	2013	172	f	f	2007	\N
172	\N	\N	Air Quality Risk	\N	2013	173	f	t	\N	\N
173	\N	\N	Percent of Area Covered by Impervious Surface	\N	2013	174	f	t	\N	\N
174	27	cmos	Number of Community Managed Open Spaces	The number of community managed open spaces in an area that include community gardens (food-producing or ornamental), Adopt-A-Lots, or some other green space managed by the community.	2013	175	f	f	2011, 2012	\N
175	140	waterc	Median Daily Water Consumption	The median daily average water consumption of all city meters registering greater than 0.0 cubic meters per day.	2013	176	f	f	2011, 2012	\N
176	\N	\N	Number of Downspout Disconnections per 1,000 Residences	\N	2013	177	f	t	\N	\N
177	\N	\N	Number of Public Trashcans	\N	2013	178	f	t	\N	\N
178	\N	\N	Rate of Sewer/Water Main Breaks per 1,000 Residents	\N	2013	179	f	t	\N	\N
179	\N	\N	Natural gas utilization	\N	2013	180	f	t	\N	\N
180	\N	\N	Energy Use	\N	2013	181	f	t	\N	\N
181	48	heatgas	Percent of Residences Heated by Utility Gas	The percentage of homes that use utility gas for heat and cooking out of all homes.	2013	182	t	f	2009-2013	\N
182	42	elheat	Percent of Residences Heated by Electricity	The percentage of homes that use electricity for heat and cooking out of all homes.	2013	183	t	f	2009-2013	\N
183	97	novhcl	Percent of Households with No Vehicles Available	The percentage of households that do not have a personal vehicle available for use out of all households in an area.	2013	184	t	f	2009-2013	\N
184	\N	\N	Number of Photovoltaic/Solar Permits	\N	2013	185	f	t	\N	\N
185	141	weather	Percent of Homes Weatherized	The percent of residential properties that were eligible for and received weatherization assistance such as air sealing or furnace replacements. The Weatherization Assistance Program helps eligible low-income households lower their energy costs by increasing the energy efficiency of their homes, while ensuring their health and safety.	2013	186	t	f	2010, 2011, 2012	Maryland Property View
186	142	wlksc	Walk Score	The Walk Score� is calculated by mapping out the distance to amenities in nine different categories (grocery stores, restaurants, shopping, coffee shops, banks, parks, schools, book stores/libraries, and entertainment) and are weighted according to importance. The distance to a location, counts, and weights determine a base score of an address, which is then normalized to a score from 0 to 100.  More information on Walk Score can be found at http://www.walkscore.com/.	2013	187	f	f	2011, 2012	\N
187	\N	\N	Aggregate Number of Community Assets	\N	2013	188	f	t	\N	\N
188	\N	\N	Transit data	\N	2013	189	f	t	\N	\N
189	\N	\N	Number of Bike Racks per 1,000 Residents	\N	2013	190	f	t	\N	\N
190	\N	\N	Road Quality	\N	2013	191	f	t	\N	\N
195	82	menrol	Number of Students Officially Enrolled in 6th - 8th Grade	The number of children who have registered for and attend 6th through 8th grade at a Baltimore City Public School as of September 30th. This count only includes students enrolled in public schools.	2013	196	t	f	2009-2010, 2010-2011, 2012	\N
196	67	hsenrol	Number of Students Officially Enrolled in 9th - 12th Grade	The number of children who have registered for and attend 9th through 12th grade at a Baltimore City Public School as of September 30th. This count only includes students enrolled in public schools.	2013	197	t	f	2009-2010, 2010-2011, 2012	\N
197	51	hfai	Average Healthy Food Availability Index	The Johns Hopkins Center for a Livable Future (CLF) calculated HFAI scores for all food stores in Baltimore, in summer 2012, using an adapted version of the NEMS-S (Nutrition Environment Measures Survey in Stores) tool.  The NEMS-S tool was developed by researchers at the Rollins School of Public Health at Emory University to measure the nutritional environment of food retail stores and was designed to assess healthy food availability in grocery and convenience stores.  CLF obtained a food permit list from the Baltimore City Health Department in August 2011, which includes all sites that sell food, such as stores, restaurants, and temporary locations such as farmers� market stands and street carts.  HFAI scores range from zero to 28.5, with higher scores indicating more availability of healthy and whole food in a food store.	2013	198	f	f	2012	\N
198	131	treeplnt	Number of Trees of Planted	\N	2013	199	t	f	2013	\N
199	\N	\N	Percent Subsidized Housing	\N	2013	200	f	f	2013	\N
200	\N	tpop	Total Population	\N	2012	1	f	f	2010	\N
201	\N	male	Total Male Population	\N	2012	2	f	f	2010	\N
202	\N	female	Total Female Population	\N	2012	3	f	f	2010	\N
203	\N	paa	Percent of Residents - Black/African-American (Non-Hispanic)	\N	2012	4	f	f	2010	\N
204	\N	pwhite	Percent of Residents - White/Caucasian (Non-Hispanic)	\N	2012	5	f	f	2010	\N
205	\N	pasi	Percent of Residents - Asian (Non-Hispanic)	\N	2012	6	f	f	2010	\N
206	\N	p2more	Percent of Residents - Two or More Races (Non-Hispanic)	\N	2012	7	f	f	2010	\N
207	\N	ppac	Percent of Residents - All Other Races (Hawaiian/ Pacific Islander, Alaskan/ Native American Other Race) (Non-Hispanic)	\N	2012	8	f	f	2010	\N
208	\N	phisp	Percent of Residents - Hispanic	\N	2012	9	f	f	2010	\N
209	\N	racdiv	Racial Diversity Index	\N	2012	10	f	f	2010	\N
210	\N	age5_	Percent of Population 0-5 years old	\N	2012	11	f	f	2010	\N
211	\N	age18_	Percent of Population 6-18 years old	\N	2012	12	f	f	2010	\N
212	\N	age24_	Percent of Population 19-24 years old	\N	2012	13	f	f	2010	\N
213	\N	age64_	Percent of Population 25-64 years old	\N	2012	14	f	f	2010	\N
214	\N	age65_	Percent of Population 65 years and over	\N	2012	15	f	f	2010	\N
215	\N	hhs	Total Number of Households	\N	2012	16	f	f	2010	\N
216	\N	femhhs	Percent of Female-Headed Households with Children Under 18	\N	2012	17	f	f	2010	\N
217	\N	fam	Percent of Households with Children Under 18	\N	2012	18	f	f	2010	\N
218	\N	hhsize	Average Household Size	\N	2012	19	f	f	2010	\N
219	83	mhhi	Median Household Income	\N	2012	20	t	f	2008-2012	\N
220	52	hh25inc	Percent of Households Earning Less than $25,000	\N	2012	21	t	f	2008-2012	\N
221	53	hh40inc	Percent of Households Earning $25,000 to $40,000	\N	2012	22	t	f	2008-2012	\N
222	54	hh60inc	Percent of Households Earning $40,000 to $60,000	\N	2012	23	t	f	2008-2012	\N
223	55	hh75inc	Percent of Households Earning $60,000 to $75,000	\N	2012	24	t	f	2008-2012	\N
224	57	hhm75	Percent of Households Earning More than $75,000	\N	2012	25	t	f	2008-2012	\N
225	\N	gini	Inequality Index (NOT YET DECIDED)	\N	2012	26	f	t	2008-2012	\N
226	58	hhpov	Percent of Family Households Living Below the Poverty Line	\N	2012	27	t	f	2008-2012	\N
227	56	hhchpov	Percent of Children Living Below the Poverty Line	\N	2012	28	t	f	2008-2012	\N
228	113	salepr	Median Price of Homes Sold	\N	2012	29	t	f	2010, 2011, 2012	\N
229	35	dom	Median Number of Days on the Market	\N	2012	30	t	f	2010, 2011, 2012	\N
230	116	shomes	Number of Homes Sold	\N	2012	31	t	f	2010, 2011, 2012	\N
231	100	ownroc	Percentage of Housing Units that are Owner-Occupied	\N	2012	32	t	f	2010, 2011, 2012	\N
232	46	fore	Percentage of Properties Under Mortgage Foreclosure	\N	2012	33	t	f	2010, 2011, 2012	Maryland Property View
233	135	vacant	Percentage of Residential Properties that are Vacant and Abandoned	\N	2012	34	t	f	2010, 2011, 2012	Maryland Property View
234	136	vio	Percentage of Residential Properties with Housing Violations (Excluding Vacants)	\N	2012	35	t	f	2010, 2011, 2012	Maryland Property View
235	112	resrehab	Percentage of Properties with Rehabilitation Permits Exceeding $5,000	\N	2012	36	t	f	2010, 2011, 2012	Maryland Property View
236	125	totalres	Total Number of Residential Properties	\N	2012	37	t	f	2010, 2011, 2012	\N
237	24	cashsa	Percentage of Residential Sales for Cash	\N	2012	38	t	f	2010, 2011, 2012	\N
238	111	reosa	Percentage of Residential Sales in Foreclosure (REO)	\N	2012	39	t	f	2010, 2011, 2012	\N
239	\N	\N	Percentage of Residential Tax Lien Sales	\N	2012	40	f	t	\N	\N
240	33	demper	Number of Demolition Permits per 1,000 Residential Properties	\N	2012	41	t	f	2011, 2012	Maryland Property View
241	30	constper	Number of New Construction Permits per 1,000 Residential Properties	\N	2012	42	t	f	2011, 2012	Maryland Property View
242	15	baltvac	Percentage of Vacant Properties Owned by Baltimore City	\N	2012	43	t	f	2011, 2012	Maryland Property View
243	10	affordm	Affordability Index - Mortgage	\N	2012	44	t	f	2008-2012	\N
244	11	affordr	Affordability Index - Rent	\N	2012	45	t	f	2008-2012	\N
245	59	histax	Number of Historic Tax Credits per 1,000 Residential Units	\N	2012	46	t	t	\N	\N
246	60	homtax	Number of Homestead Tax Credits per 1,000 Residential Units	\N	2012	47	t	f	2011, 2012	Maryland Property View
247	101	owntax	Number of Homeowner's Tax Credits per 1,000 Residential Units	\N	2012	48	t	f	2011, 2012	Maryland Property View
248	96	nomail	Percent Residential Properties that do Not Receive Mail	\N	2012	49	t	f	2010, 2011, 2012	\N
249	32	crime	Part 1 Crime Rate per 1,000 Residents	\N	2012	50	t	f	2010, 2011, 2012	U.S. Bureau of the Census
250	\N	\N	Percentage of Part 1 Crimes that Occur During Daytime	\N	2012	51	f	t	\N	\N
582	\N	\N	Number of Photovoltaic/Solar Permits	\N	2011	185	f	t	\N	\N
254	69	juvarr	Juvenile Arrest Rate per 1,000 Juveniles	\N	2012	55	f	f	2011, 2012	U.S. Bureau of the Census
255	71	juvviol	Juvenile Arrest Rate for Violent Offenses per 1,000 Juveniles	\N	2012	56	f	f	2011, 2012	U.S. Bureau of the Census
256	70	juvdrug	Juvenile Arrest Rate for Drug-Related Offenses per 1,000 Juveniles	\N	2012	57	f	f	2011, 2012	U.S. Bureau of the Census
257	117	shoot	Number of Shootings per 1,000 Residents	\N	2012	58	f	f	2010, 2011, 2012	U.S. Bureau of the Census
258	47	gunhom	Number of Gun-Related Homicides per 1,000 Residents	\N	2012	59	t	f	2010, 2011, 2012	U.S. Bureau of the Census
259	25	caslt	Number of Common Assault Calls for Service per 1,000 Residents	\N	2012	60	f	f	2010, 2011, 2012	U.S. Bureau of the Census
260	91	narc	Number of Narcotics Calls for Service per 1,000 Residents	\N	2012	61	f	f	2010, 2011, 2012	U.S. Bureau of the Census
261	22	caracc	Number of Automobile Accident Calls for Service per 1,000 Residents	\N	2012	62	f	f	2010, 2011, 2012	U.S. Bureau of the Census
262	\N	\N	Rate of Fire and EMS Calls for Service per 1,000 Residents	\N	2012	63	f	t	\N	\N
263	\N	\N	Average Fire and EMS Response Time	\N	2012	64	f	t	\N	\N
264	\N	\N	Number of Children Enrolled in Head Start Programs	\N	2012	65	f	t	\N	\N
265	39	eattend	Number of Students Ever Attended 1st - 5th Grade	\N	2012	66	t	f	2009-2010, 2010-2011, 2012	\N
266	81	mattend	Number of Students Ever Attended 6th - 8th Grade	\N	2012	67	t	f	2009-2010, 2010-2011, 2012	\N
267	65	hsattend	Number of Students Ever Attended 9th - 12th Grade	\N	2012	68	t	f	2009-2010, 2010-2011, 2012	\N
268	\N	\N	Percent of Students Enolled in CTE Programs	\N	2012	69	f	t	\N	\N
269	6	aastud	Percent of Students that are African American (non-Hispanic)	\N	2012	70	t	f	2009-2010, 2010-2011, 2012	\N
270	144	wstud	Percent of Students that are White (non-Hispanic)	\N	2012	71	t	f	2009-2010, 2010-2011, 2012	\N
271	68	hstud	Percent of Students that are Hispanic	\N	2012	72	t	f	2009-2010, 2010-2011, 2012	\N
272	7	abse	Percent of 1st-5th Grade Students that are Chronically Absent (Missing at least 20 days)	\N	2012	73	t	f	2009-2010, 2010-2011, 2012	\N
273	9	absmd	Percent of 6th-8th Grade Students that are Chronically Absent (Missing at least 20 days)	\N	2012	74	t	f	2009-2010, 2010-2011, 2012	\N
274	8	abshs	Percent of 9th-12th Grade Students that are Chronically Absent (Missing at least 20 days)	\N	2012	75	t	f	2009-2010, 2010-2011, 2012	\N
275	121	susp	Percentage of Students Suspended or Expelled During School Year	\N	2012	76	t	f	2009-2010, 2010-2011, 2012	\N
276	44	farms	Percentage of Students Receiving Free or Reduced Meals	\N	2012	77	t	f	2009-2010, 2010-2011, 2012	\N
277	120	sped	Percentage of Students Enrolled in Special Education Programs	\N	2012	78	t	f	2009-2010, 2010-2011, 2012	\N
278	\N	\N	Percentage of Students Enrolled in After School Programs	\N	2012	79	f	t	\N	\N
279	109	ready	Kindergarten School Readiness	\N	2012	80	t	f	2010-2011, 2012	\N
280	78	math3	Percentage of 3rd Grade Students Passing MSA Math	\N	2012	81	t	f	2009-2010, 2010-2011, 2012	\N
281	106	read3	Percentage of 3rd Grade Students Passing MSA Reading	\N	2012	82	t	f	2009-2010, 2010-2011, 2012	\N
282	79	math5	Percentage of 5th Grade Students Passing MSA Math	\N	2012	83	t	f	2009-2010, 2010-2011, 2012	\N
283	107	read5	Percentage of 5th Grade Students Passing MSA Reading	\N	2012	84	t	f	2009-2010, 2010-2011, 2012	\N
284	80	math8	Percentage of 8th Grade Students Passing MSA Math	\N	2012	85	t	f	2009-2010, 2010-2011, 2012	\N
285	108	read8	Percentage of 8th Grade Students Passing MSA Reading	\N	2012	86	t	f	2009-2010, 2010-2011, 2012	\N
286	63	hsaeng	Percentage of Students Passing H.S.A. English	\N	2012	87	t	f	2009-2010, 2010-2011, 2012	\N
287	62	hsabio	Percentage of Students Passing H.S.A. Biology	\N	2012	88	t	f	2009-2010, 2010-2011, 2012	\N
288	64	hsagov	Percentage of Students Passing H.S.A. Government	\N	2012	89	f	f	2009-2010, 2010-2011, 2012	\N
289	61	hsaalg	Percentage of Students Passing H.S.A. Algebra	\N	2012	90	t	f	2009-2010, 2010-2011, 2012	\N
290	37	drop	High School Dropout/Withdrawl Rate	\N	2012	91	t	f	2009-2010, 2010-2011, 2012	\N
291	28	compl	High School Completion Rate	\N	2012	92	t	f	2009-2010, 2010-2011, 2012	\N
292	\N	\N	Persons Receiving a GED	\N	2012	93	f	t	\N	\N
293	115	sclsw	Percent of Students Switching Schools within School Year	\N	2012	94	t	f	2010-2011, 2012	\N
294	\N	\N	Percentage of Students Attending Zoned School	\N	2012	95	f	t	\N	\N
295	\N	\N	Average Distance Travelled to School (6th-8th Grade)	\N	2012	96	f	t	\N	\N
296	\N	\N	Average Distance Travelled to School (9th-12th Grade)	\N	2012	97	f	t	\N	\N
297	114	sclemp	Percentage of Population aged 16-19 in School and/or Employed	\N	2012	98	t	f	2008-2012	\N
298	123	teenbir	Teen Birth Rate per 1,000 Females (aged 15-19)	\N	2012	99	t	f	2010, 2011, 2012	U.S. Bureau of the Census
299	124	termbir	Percent of Births Delivered at Term (37-42 Weeks)	\N	2012	100	t	f	2010, 2011, 2012	U.S. Bureau of the Census
300	17	birthwt	Percent of Babies Born with a Satisfactory Birth Weight	\N	2012	101	t	f	2010, 2011, 2012	U.S. Bureau of the Census
301	103	prenatal	Percent of Births Where the Mother Received Early Prenatal Care (First Trimester)	\N	2012	102	t	f	2010, 2011, 2012	U.S. Bureau of the Census
302	72	leadtest	Number of Children (aged 0-6) Tested for Elevated Blood Lead Levels	\N	2012	103	t	f	2010, 2011, 2012	\N
303	40	ebll	Percent of Children (aged 0-6) with Elevated Blood Lead Levels	\N	2012	104	t	f	2010, 2011, 2012	\N
304	\N	leadv	Percent of Lead Violations per 1,000 Residential Units	\N	2012	105	f	f	2011, 2012	Maryland Property View
305	122	tanf	Percent of Families Receiving TANF	\N	2012	106	t	f	2011, 2012	U.S. Bureau of the Census
306	\N	\N	Percent of Persons receiving SNAP	\N	2012	107	f	t	\N	\N
307	\N	\N	Fetal Mortality Rate	\N	2012	108	f	t	\N	\N
308	77	liquor	Liquor Outlet density (per 1,000 Residents)	\N	2012	109	t	f	2010, 2011, 2012	U.S. Bureau of the Census
309	45	fastfd	Fast Food Outlet Density (per 1,000 Residents)	\N	2012	110	f	f	2011, 2012	\N
310	\N	\N	Number of Persons calling UWCM 211 for Health-Related Services	\N	2012	111	f	t	\N	\N
311	\N	\N	Rate of STDs per 1,000 Residents (Chlamydia, Gonorrhea, and Syphilis)	\N	2012	112	f	t	\N	\N
312	\N	\N	Rate of HIV/AIDS per 1,000 Residents	\N	2012	113	f	t	\N	\N
313	75	lifeexp	Life Expectancy	\N	2012	114	t	f	2011, 2012	\N
315	84	mort14_	Mortality by Age (1-14 years old)	\N	2012	116	t	f	2011, 2012	\N
316	86	mort24_	Mortality by Age (15-24 years old)	\N	2012	117	t	f	2011, 2012	\N
317	87	mort44_	Mortality by Age (25-44 years old)	\N	2012	118	t	f	2011, 2012	\N
318	88	mort64_	Mortality by Age (45-64 years old)	\N	2012	119	t	f	2011, 2012	\N
319	89	mort84_	Mortality by Age (65-84 years old)	\N	2012	120	t	f	2011, 2012	\N
320	90	mort85_	Mortality by Age (85 and over)	\N	2012	121	t	f	2011, 2012	\N
321	\N	\N	Causes of Death (analysis of top causes)	\N	2012	122	f	t	\N	\N
322	\N	\N	Causes of Death (analysis of top causes)	\N	2012	123	f	t	\N	\N
323	\N	\N	Causes of Death (analysis of top causes)	\N	2012	124	f	t	\N	\N
324	\N	\N	Causes of Death (analysis of top causes)	\N	2012	125	f	t	\N	\N
325	\N	\N	Causes of Death (analysis of top causes)	\N	2012	126	f	t	\N	\N
326	\N	\N	Percent of persons with health insurance	\N	2012	127	f	t	\N	\N
327	74	libcard	Number of Persons with Library Cards per 1,000 Residents	\N	2012	128	t	f	2011, 2012	U.S. Bureau of the Census
328	\N	\N	Number of Event Permits Requested per 1,000 Residents	\N	2012	129	f	t	\N	\N
329	\N	\N	Public Art per 1,000 Residents	\N	2012	130	f	t	\N	\N
330	12	artbus	Number of Businesses that are Arts-Related per 1,000 residents	\N	2012	131	t	f	2010, 2011, 2012	U.S. Bureau of the Census
331	13	artemp	Total Employment in Arts-Related Businesses	\N	2012	132	t	f	2010, 2011, 2012	\N
332	\N	\N	Percentage of Businesses that are Non-Profits	\N	2012	133	f	t	\N	\N
333	43	empl	Percent  Population 16-64 Employed	\N	2012	134	t	f	2008-2012	\N
334	133	unempl	Percent  Population 16-64 Unemployed and Looking for Work	\N	2012	135	t	f	2008-2012	\N
335	95	nilf	Percent  Population 16-64 Not in Labor Force	\N	2012	136	t	f	2008-2012	\N
336	134	unempr	Unemployment Rate	\N	2012	137	t	f	2008-2012	\N
337	73	lesshs	Percent  Population (25 years and over) With Less Than a High School Diploma or GED	\N	2012	138	t	f	2008-2012	\N
338	66	hsdipl	Percent  Population (25 years and over) With High School Diploma	\N	2012	139	t	f	2008-2012	\N
339	119	somecol	Percent  Population (25 years and over) with Some College Education and Above	\N	2012	140	t	f	2008-2012	\N
340	29	comprop	Total Number of Commercial Properties	\N	2012	141	t	f	2010, 2011, 2012	\N
341	31	crehab	Percent of Commercial Properties with Rehab Permits Above $5,000	\N	2012	142	t	f	2010, 2011, 2012	Maryland Property View
342	98	numbus	Total Number of Businesses	\N	2012	143	t	f	2010, 2011, 2012	\N
343	126	totemp	Total Number of Employees	\N	2012	144	t	f	2010, 2011, 2012	\N
344	118	smlbus	Number of Businesses with Under 50 Employees	\N	2012	145	t	f	2010, 2011, 2012	\N
345	143	wrkout	Percent of Employed Residents who Work Outside the City	\N	2012	146	t	f	2010	\N
346	\N	\N	CRA data (residential and commercial)	\N	2012	147	f	t	\N	\N
347	\N	\N	CRA data (residential and commercial)	\N	2012	148	f	t	\N	\N
348	16	banks	Number of Banks and Bank Branches per 1,000 Residents	\N	2012	149	t	f	2011, 2012	U.S. Bureau of the Census
349	18	biz1_	Percent of Businesses that are 1 year old or less	\N	2012	150	t	f	2010, 2011, 2012	\N
350	19	biz2_	Percent of Businesses that are 2 years old or less	\N	2012	151	t	f	2010, 2011, 2012	\N
351	20	biz4_	Percent of Businesses that are 4 years old or less	\N	2012	152	t	f	2010, 2011, 2012	\N
352	\N	\N	Percent of Adult Population on Parole/Probation	\N	2012	153	f	t	\N	\N
353	\N	\N	Percent of CSA that is Either Low or Moderate income (by Census tract)	\N	2012	154	f	t	\N	\N
354	\N	\N	Percent  of persons in MOED training programs (per 1,000 residents)	\N	2012	155	f	t	\N	\N
355	\N	\N	Percent of Population with Broadband Internet Access	\N	2012	156	f	t	\N	\N
356	94	neiind	Number of Businesses by Selected Neighborhood Industry (NAICS Sectors)	\N	2012	157	t	f	2010, 2011, 2012	\N
357	92	neibus	Neighborhood Businesses per 1,000 residents (NAICS Sectors)	\N	2012	158	t	f	2010, 2011, 2012	\N
358	93	neiemp	Total number of Employees by Selected Nieghborhood Industry (NAICS Sectors)	\N	2012	159	t	f	2010, 2011, 2012	\N
359	110	regvote	Percent of Population (Over the age of 18) Who are Registered to Vote	\N	2012	160	t	f	2010, 2012	\N
360	138	voted	Percent Population (Over the age of 18) Who Voted in the General Election	\N	2012	161	t	f	2010, 2012	\N
361	34	dirtyst	Rate of Dirty Streets and Alleys Reports per 1,000 Residents	\N	2012	162	t	f	2010, 2011, 2012	U.S. Bureau of the Census
362	26	clogged	Rate of Clogged Storm Drain Reports per 1,000 Residents	\N	2012	163	t	f	2010, 2011, 2012	U.S. Bureau of the Census
363	38	drvalone	Percent of Population that Drove Alone to Work	\N	2012	164	t	f	2008-2012	\N
364	23	carpool	Percent of Population that Carpool to Work	\N	2012	165	t	f	2008-2012	\N
365	105	pubtran	Percent of Population that Uses Public Transportation to Get to Work	\N	2012	166	t	f	2008-2012	\N
366	139	walked	Percent of Population that Walks to Work	\N	2012	167	t	f	2008-2012	\N
367	127	trav14_	Percent of Employed Population with Travel Time to Work of 0-14 Minutes	\N	2012	168	t	f	2008-2012	\N
368	128	trav29_	Percent of Employed Population with Travel Time to Work of 15-29 Minutes	\N	2012	169	t	f	2008-2012	\N
369	129	trav44_	Percent of Employed Population with Travel Time to Work of 30-44 Minutes	\N	2012	170	t	f	2008-2012	\N
370	130	trav45_	Percent of Employed Population with Travel Time to Work of 45 Minutes and Over	\N	2012	171	t	f	2008-2012	\N
371	132	trees	Percent of Area Covered by Trees	\N	2012	172	f	f	2007	\N
372	\N	\N	Air Quality Risk	\N	2012	173	f	t	\N	\N
373	\N	\N	Percent of Area Covered by Impervious Surface	\N	2012	174	f	t	\N	\N
374	27	cmos	Number of Community Managed Open Spaces	\N	2012	175	f	f	2011, 2012	\N
375	140	waterc	Median Daily Water Consumption	\N	2012	176	f	f	2011, 2012	\N
376	\N	\N	Number of Downspout Disconnections per 1,000 Residences	\N	2012	177	f	t	\N	\N
377	\N	\N	Number of Public Trashcans	\N	2012	178	f	t	\N	\N
378	\N	\N	Rate of Sewer/Water Main Breaks per 1,000 Residents	\N	2012	179	f	t	\N	\N
379	\N	\N	Natural gas utilization	\N	2012	180	f	t	\N	\N
380	\N	\N	Energy Use	\N	2012	181	f	t	\N	\N
381	48	heatgas	Percent of Residences Heated by Utility Gas	\N	2012	182	t	f	2008-2012	\N
382	42	elheat	Percent of Residences Heated by Electricity	\N	2012	183	t	f	2008-2012	\N
383	97	novhcl	Percent of Households with No Vehicles Available	\N	2012	184	t	f	2008-2012	\N
384	\N	\N	Number of Photovoltaic/Solar Permits	\N	2012	185	f	t	\N	\N
385	141	weather	Percent of Homes Weatherized	\N	2012	186	t	f	2010, 2011, 2012	Maryland Property View
386	142	wlksc	Walk Score	\N	2012	187	f	f	2011, 2012	\N
387	\N	\N	Aggregate Number of Community Assets	\N	2012	188	f	t	\N	\N
388	\N	\N	Transit data	\N	2012	189	f	t	\N	\N
389	\N	\N	Number of Bike Racks per 1,000 Residents	\N	2012	190	f	t	\N	\N
390	\N	\N	Road Quality	\N	2012	191	f	t	\N	\N
391	21	bkln	Number of Miles of Bike Lanes	\N	2012	192	t	f	2012	\N
392	\N	\N	Percent  of persons by occupation classification (major classifications)	\N	2012	193	f	t	\N	\N
393	99	othrcom	Percent of Population Using Other Means to Commute to Work (Taxi, Motorcycle, Bicycle, Other)	\N	2012	194	t	f	2008-2012	\N
394	41	eenrol	Number of Students Officially Enrolled in 1st - 5th Grade	\N	2012	195	t	f	2009-2010, 2010-2011, 2012	\N
395	82	menrol	Number of Students Officially Enrolled in 6th - 8th Grade	\N	2012	196	t	f	2009-2010, 2010-2011, 2012	\N
396	67	hsenrol	Number of Students Officially Enrolled in 9th - 12th Grade	\N	2012	197	t	f	2009-2010, 2010-2011, 2012	\N
397	51	hfai	Average Healthy Food Availability Index	\N	2012	198	t	f	2012	\N
398	\N	tpop	Total Population	\N	2011	1	f	f	2010	\N
399	\N	male	Total Male Population	\N	2011	2	f	f	2010	\N
400	\N	female	Total Female Population	\N	2011	3	f	f	2010	\N
401	\N	paa	Percent of Residents - Black/African-American (Non-Hispanic)	\N	2011	4	f	f	2010	\N
402	\N	pwhite	Percent of Residents - White/Caucasian (Noon-Hispanic)	\N	2011	5	f	f	2010	\N
403	\N	pasi	Percent of Residents - Asian (Non-Hispanic)	\N	2011	6	f	f	2010	\N
404	\N	p2more	Percent of Residents - Two or More Races (Non-Hispanic)	\N	2011	7	f	f	2010	\N
405	\N	ppac	Percent of Residents - All Other Races (Hawaiian/ Pacific Islander, Alaskan/ Native American Other Race) (Non-Hispanic)	\N	2011	8	f	f	2010	\N
406	\N	phisp	Percent of Residents - Hispanic	\N	2011	9	f	f	2010	\N
407	\N	racdiv	Racial Diversity Index	\N	2011	10	f	f	2010	\N
408	\N	age5_	Percent of Population 0-5 years old	\N	2011	11	f	f	2010	\N
409	\N	age18_	Percent of Population 6-18 years old	\N	2011	12	f	f	2010	\N
410	\N	age24_	Percent of Population 19-24 years old	\N	2011	13	f	f	2010	\N
411	\N	age64_	Percent of Population 25-64 years old	\N	2011	14	f	f	2010	\N
412	\N	age65_	Percent of Population 65 years and over	\N	2011	15	f	f	2010	\N
413	\N	hhs	Total Number of Households	\N	2011	16	f	f	2010	\N
414	\N	femhhs	Percent of Female-Headed Households with Children Under 18	\N	2011	17	f	f	2010	\N
415	\N	fam	Percent of Households with Children Under 18	\N	2011	18	f	f	2010	\N
416	\N	hhsize	Average Household Size	\N	2011	19	f	f	2010	\N
417	83	mhhi	Median Household Income	\N	2011	20	t	f	2007-2011	\N
418	52	hh25inc	Percent of Households Earning Less than $25,000	\N	2011	21	t	f	2007-2011	\N
419	53	hh40inc	Percent of Households Earning $25,000 to $40,000	\N	2011	22	t	f	2007-2011	\N
420	54	hh60inc	Percent of Households Earning $40,000 to $60,000	\N	2011	23	t	f	2007-2011	\N
421	55	hh75inc	Percent of Households Earning $60,000 to $75,000	\N	2011	24	t	f	2007-2011	\N
422	57	hhm75	Percent of Households Earning More than $75,000	\N	2011	25	t	f	2007-2011	\N
423	\N	gini	Inequality Index (NOT YET DECIDED)	\N	2011	26	f	t	2007-2011	\N
424	58	hhpov	Percent of Households Living Below the Poverty Line	\N	2011	27	t	f	2007-2011	\N
425	56	hhchpov	Percent of Children Living Below the Poverty Line	\N	2011	28	t	f	2007-2011	\N
426	113	salepr	Median Price of Homes Sold	\N	2011	29	t	f	2010, 2011	\N
427	35	dom	Median Number of Days on the Market	\N	2011	30	t	f	2010, 2011	\N
428	116	shomes	Number of Homes Sold	\N	2011	31	t	f	2010, 2011	\N
429	100	ownroc	Percentage of Housing Units that are Owner-Occupied	\N	2011	32	t	f	2010, 2011	\N
430	46	fore	Percentage of Properties Under Mortgage Foreclosure	\N	2011	33	t	f	2010, 2011	Maryland Property View
431	135	vacant	Percentage of Residential Properties that are Vacant and Abandoned	\N	2011	34	t	f	2010, 2011	Maryland Property View
432	136	vio	Percentage of Residential Properties with Housing Violations (Excluding Vacants)	\N	2011	35	t	f	2010, 2011	Maryland Property View
433	112	resrehab	Percentage of Properties with Rehabilitation Permits Exceeding $5,000	\N	2011	36	t	f	2010, 2011	Maryland Property View
434	125	totalres	Total Number of Residential Properties	\N	2011	37	t	f	2010, 2011	\N
435	24	cashsa	Percentage of Residential Sales for Cash	\N	2011	38	t	f	2010, 2011	\N
436	111	reosa	Percentage of Residential Sales in Foreclosure (REO)	\N	2011	39	t	f	2010, 2011	\N
437	\N	\N	Percentage of Residential Tax Lien Sales	\N	2011	40	f	t	\N	\N
438	33	demper	Number of Demolition Permits per 1,000 Residential Properties	\N	2011	41	t	f	2011	Maryland Property View
439	30	constper	Number of New Construction Permits per 1,000 Residential Properties	\N	2011	42	t	f	2011	Maryland Property View
440	15	baltvac	Percentage of Vacant Properties Owned by Baltimore City	\N	2011	43	t	f	2011	Maryland Property View
441	10	affordm	Affordability Index - Mortgage	\N	2011	44	t	f	2007-2011	\N
442	11	affordr	Affordability Index - Rent	\N	2011	45	t	f	2007-2011	\N
443	59	histax	Number of Historic Tax Credits per 1,000 Residential Units	\N	2011	46	f	t	\N	\N
444	60	homtax	Number of Homestead Tax Credits per 1,000 Residential Units	\N	2011	47	t	f	2011	Maryland Property View
445	101	owntax	Number of Homeowner's Tax Credits per 1,000 Residential Units	\N	2011	48	t	f	2011	Maryland Property View
446	96	nomail	Percent Residential Properties that do Not Receive Mail	\N	2011	49	t	f	2010, 2011	\N
447	32	crime	Part 1 Crime Rate per 1,000 Residents	\N	2011	50	t	f	2010, 2011	U.S. Bureau of the Census
448	\N	\N	Percentage of Part 1 Crimes that Occur During Daytime	\N	2011	51	t	t	\N	\N
449	137	viol	Violent Crime Rate per 1,000 Residents	\N	2011	52	t	f	2010, 2011	U.S. Bureau of the Census
450	104	prop	Property Crime Rate per 1,000 Residents	\N	2011	53	t	f	2010, 2011	U.S. Bureau of the Census
451	36	domvio	Domestic Violence Calls For Service per 1,000 Residents	\N	2011	54	t	f	2010, 2011	U.S. Bureau of the Census
452	69	juvarr	Juvenile Arrest Rate per 1,000 Juveniles	\N	2011	55	t	f	2011	U.S. Bureau of the Census
453	71	juvviol	Juvenile Arrest Rate for Violent Offenses per 1,000 Juveniles	\N	2011	56	t	f	2011	U.S. Bureau of the Census
454	70	juvdrug	Juvenile Arrest Rate for Drug-Related Offenses per 1,000 Juveniles	\N	2011	57	t	f	2011	U.S. Bureau of the Census
455	117	shoot	Number of Shootings per 1,000 Residents	\N	2011	58	t	f	2010, 2011	U.S. Bureau of the Census
456	47	gunhom	Number of Gun-Related Homicides per 1,000 Residents	\N	2011	59	t	f	2010, 2011	U.S. Bureau of the Census
457	25	caslt	Number of Common Assault Calls for Service per 1,000 Residents	\N	2011	60	t	f	2010, 2011	U.S. Bureau of the Census
458	91	narc	Number of Narcotics Calls for Service per 1,000 Residents	\N	2011	61	t	f	2010, 2011	U.S. Bureau of the Census
459	22	caracc	Number of Automobile Accident Calls for Service per 1,000 Residents	\N	2011	62	t	f	2010, 2011	U.S. Bureau of the Census
460	\N	\N	Rate of Fire and EMS Calls for Service per 1,000 Residents	\N	2011	63	f	t	\N	\N
461	\N	\N	Average Fire and EMS Response Time	\N	2011	64	f	t	\N	\N
462	\N	\N	Number of Children Enrolled in Head Start Programs	\N	2011	65	f	t	\N	\N
463	39	eattend	Number of Students Ever Enrolled 1st - 5th Grade	\N	2011	66	t	f	2009-2010, 2010-2011	\N
464	81	mattend	Number of Students Ever Enrolled 6th - 8th Grade	\N	2011	67	t	f	2009-2010, 2010-2011	\N
465	49	heattend	Number of Students Ever Enrolled 9th - 12th Grade	\N	2011	68	t	f	2009-2010, 2010-2011	\N
466	\N	\N	Percent of Students Enolled in CTE Programs	\N	2011	69	f	t	\N	\N
467	6	aastud	Percent of Students that are African American	\N	2011	70	t	f	2009-2010, 2010-2011	\N
468	144	wstud	Percent of Students that are White (non-Hispanic)	\N	2011	71	t	f	2009-2010, 2010-2011	\N
469	68	hstud	Percent of Students that are Hispanic	\N	2011	72	t	f	2009-2010, 2010-2011	\N
470	7	abse	Percent of 1st-5th Grade Students that are Chronically Absent (Missing at least 20 days)	\N	2011	73	t	f	2009-2010, 2010-2011	\N
471	9	absmd	Percent of 6th-8th Grade Students that are Chronically Absent (Missing at least 20 days)	\N	2011	74	t	f	2009-2010, 2010-2011	\N
472	8	abshs	Percent of 9th-12th Grade Students that are Chronically Absent (Missing at least 20 days)	\N	2011	75	t	f	2009-2010, 2010-2011	\N
473	121	susp	Percentage of Students Suspended or Expelled During School Year	\N	2011	76	t	f	2009-2010, 2010-2011	\N
474	44	farms	Percentage of Students Receiving Free or Reduced Meals	\N	2011	77	t	f	2009-2010, 2010-2011	\N
475	120	sped	Percentage of Students Enrolled in Special Education Programs	\N	2011	78	t	f	2009-2010, 2010-2011	\N
476	\N	\N	Percentage of Students Enrolled in After School Programs	\N	2011	79	f	t	\N	\N
477	109	ready	Kindergarten School Readiness	\N	2011	80	t	f	2010-2011	\N
478	0	3math	Percentage of 3rd Grade Students Passing MSA Math	\N	2011	81	t	f	2009-2010, 2010-2011	\N
479	1	3read	Percentage of 3rd Grade Students Passing MSA Reading	\N	2011	82	t	f	2009-2010, 2010-2011	\N
480	2	5math	Percentage of 5th Grade Students Passing MSA Math	\N	2011	83	t	f	2009-2010, 2010-2011	\N
481	3	5read	Percentage of 5th Grade Students Passing MSA Reading	\N	2011	84	t	f	2009-2010, 2010-2011	\N
482	4	8math	Percentage of 8th Grade Students Passing MSA Math	\N	2011	85	t	f	2009-2010, 2010-2011	\N
483	5	8read	Percentage of 8th Grade Students Passing MSA Reading	\N	2011	86	t	f	2009-2010, 2010-2011	\N
484	63	hsaeng	Percentage of Students Passing H.S.A. English	\N	2011	87	t	f	2009-2010, 2010-2011	\N
485	62	hsabio	Percentage of Students Passing H.S.A. Biology	\N	2011	88	t	f	2009-2010, 2010-2011	\N
486	64	hsagov	Percentage of Students Passing H.S.A. Government	\N	2011	89	t	f	2009-2010, 2010-2011	\N
487	61	hsaalg	Percentage of Students Passing H.S.A. Algebra	\N	2011	90	t	f	2009-2010, 2010-2011	\N
488	37	drop	High School Dropout/Withdrawl Rate	\N	2011	91	t	f	2009-2010, 2010-2011	\N
489	28	compl	High School Completion Rate	\N	2011	92	t	f	2009-2010, 2010-2011	\N
490	\N	\N	Persons Receiving a GED	\N	2011	93	f	t	\N	\N
491	115	sclsw	Percent of Students Switching Schools within School Year	\N	2011	94	t	f	2010-2011	\N
492	\N	\N	Percentage of Students Attending Zoned School	\N	2011	95	f	t	\N	\N
493	\N	\N	Average Distance Travelled to School (6th-8th Grade)	\N	2011	96	f	t	\N	\N
494	\N	\N	Average Distance Travelled to School (9th-12th Grade)	\N	2011	97	f	t	\N	\N
495	114	sclemp	Percentage of Population aged 16-19 in School and/or Employed	\N	2011	98	t	f	2007-2011	\N
496	123	teenbir	Teen Birth Rate per 1,000 Females (aged 15-19)	\N	2011	99	t	f	2010, 2011	U.S. Bureau of the Census
497	124	termbir	Percent of Births Delivered at Term (37-42 Weeks)	\N	2011	100	t	f	2010, 2011	U.S. Bureau of the Census
498	17	birthwt	Percent of Babies Born with a Satisfactory Birth Weight	\N	2011	101	t	f	2010, 2011	U.S. Bureau of the Census
499	103	prenatal	Percent of Births Where the Mother Received Early Prenatal Care (First Trimester)	\N	2011	102	t	f	2010, 2011	U.S. Bureau of the Census
500	72	leadtest	Number of Children (aged 0-6) Tested for Elevated Blood Lead Levels	\N	2011	103	t	f	2010, 2011	\N
501	40	ebll	Percent of Children (aged 0-6) with Elevated Blood Lead Levels	\N	2011	104	t	f	2010, 2011	\N
502	\N	leadv	Percent of Lead Violations per 1,000 Residential Units	\N	2011	105	f	f	2011	Maryland Property View
503	122	tanf	Percent of Families Receiving TANF	\N	2011	106	t	f	2011	U.S. Bureau of the Census
504	\N	\N	Percent of Persons receiving SNAP	\N	2011	107	f	t	\N	\N
505	\N	\N	Fetal Mortality Rate	\N	2011	108	f	t	\N	\N
506	77	liquor	Liquor Outlet density (per 1,000 Residents)	\N	2011	109	t	f	2010, 2011	U.S. Bureau of the Census
507	45	fastfd	Fast Food Outlet Density (per 1,000 Residents)	\N	2011	110	t	f	2011	\N
508	\N	\N	Number of Persons calling UWCM 211 for Health-Related Services	\N	2011	111	f	t	\N	\N
509	\N	\N	Rate of STDs per 1,000 Residents (Chlamydia, Gonorrhea, and Syphilis)	\N	2011	112	f	t	\N	\N
510	\N	\N	Rate of HIV/AIDS per 1,000 Residents	\N	2011	113	f	t	\N	\N
511	75	lifeexp	Life Expectancy	\N	2011	114	t	f	2011	\N
512	85	mort1_	Mortality by Age (Less than 1 year old)	\N	2011	115	t	f	2011	\N
513	84	mort14_	Mortality by Age (1-14 years old)	\N	2011	116	t	f	2011	\N
514	86	mort24_	Mortality by Age (15-24 years old)	\N	2011	117	t	f	2011	\N
515	87	mort44_	Mortality by Age (25-44 years old)	\N	2011	118	t	f	2011	\N
516	88	mort64_	Mortality by Age (45-64 years old)	\N	2011	119	t	f	2011	\N
517	89	mort84_	Mortality by Age (65-84 years old)	\N	2011	120	t	f	2011	\N
518	90	mort85_	Mortality by Age (85 and over)	\N	2011	121	t	f	2011	\N
519	\N	\N	Causes of Death (analysis of top causes)	\N	2011	122	f	t	\N	\N
520	\N	\N	Causes of Death (analysis of top causes)	\N	2011	123	f	t	\N	\N
521	\N	\N	Causes of Death (analysis of top causes)	\N	2011	124	f	t	\N	\N
522	\N	\N	Causes of Death (analysis of top causes)	\N	2011	125	f	t	\N	\N
523	\N	\N	Causes of Death (analysis of top causes)	\N	2011	126	f	t	\N	\N
524	\N	\N	Percent of persons with health insurance	\N	2011	127	f	t	\N	\N
525	74	libcard	Number of Persons with Library Cards per 1,000 Residents	\N	2011	128	t	f	2011	U.S. Bureau of the Census
526	\N	\N	Number of Event Permits Requested per 1,000 Residents	\N	2011	129	f	t	\N	\N
527	\N	\N	Public Art per 1,000 Residents	\N	2011	130	f	t	\N	\N
528	12	artbus	Number of Businesses that are Arts-Related per 1,000 residents	\N	2011	131	t	f	2010, 2011	U.S. Bureau of the Census
529	13	artemp	Total Employment in Arts-Related Businesses	\N	2011	132	t	f	2010, 2011	\N
530	\N	\N	Percentage of Businesses that are Non-Profits	\N	2011	133	f	t	\N	\N
531	43	empl	Percent  Population 16-64 Employed	\N	2011	134	t	f	2007-2011	\N
532	133	unempl	Percent  Population 16-64 Unemployed and Looking for Work	\N	2011	135	t	f	2007-2011	\N
533	95	nilf	Percent  Population 16-64 Not in Labor Force	\N	2011	136	t	f	2007-2011	\N
534	134	unempr	Unemployment Rate	\N	2011	137	t	f	2007-2011	\N
535	73	lesshs	Percent  Population (25 years and over) With Less Than a High School Diploma or GED	\N	2011	138	t	f	2007-2011	\N
536	119	somecol	Percent  Population (25 years and over) With High School Diploma and Some College or Associates Degree	\N	2011	139	t	f	2007-2011	\N
537	14	bahigher	Percent  Population (25 years and over) with a Bachelor's Degree or Above	\N	2011	140	t	f	2007-2011	\N
538	29	comprop	Total Number of Commercial Properties	\N	2011	141	t	f	2010, 2011	\N
539	31	crehab	Percent of Commercial Properties with Rehab Permits Above $5,000	\N	2011	142	t	f	2010, 2011	Maryland Property View
540	98	numbus	Total Number of Businesses	\N	2011	143	t	f	2010, 2011	\N
541	126	totemp	Total Number of Employees	\N	2011	144	t	f	2010, 2011	\N
542	118	smlbus	Number of Businesses with Under 50 Employees	\N	2011	145	t	f	2010, 2011	\N
543	\N	\N	Percent of Employed Residents who Work Outside the City	\N	2011	146	f	f	2010	\N
544	\N	\N	CRA data (residential and commercial)	\N	2011	147	f	t	\N	\N
545	\N	\N	CRA data (residential and commercial)	\N	2011	148	f	t	\N	\N
546	16	banks	Number of Banks and Bank Branches per 1,000 Residents	\N	2011	149	t	f	2011	U.S. Bureau of the Census
547	18	biz1_	Percent of Businesses that are 1 year old or less	\N	2011	150	t	f	2010, 2011	\N
548	19	biz2_	Percent of Businesses that are 2 years old or less	\N	2011	151	t	f	2010, 2011	\N
549	20	biz4_	Percent of Businesses that are 4 years old or less	\N	2011	152	t	f	2010, 2011	\N
550	\N	\N	Percent of Adult Population on Parole/Probation	\N	2011	153	f	t	\N	\N
551	\N	\N	Percent of CSA that is Either Low or Moderate income (by Census tract)	\N	2011	154	f	t	\N	\N
552	\N	\N	Percent  of persons in MOED training programs (per 1,000 residents)	\N	2011	155	f	t	\N	\N
553	\N	\N	Percent of Population with Broadband Internet Access	\N	2011	156	f	t	\N	\N
554	94	neiind	Number of Businesses by Selected Neighborhood Industry (NAICS Sectors)	\N	2011	157	t	f	2010, 2011	\N
555	92	neibus	Neighborhood Businesses per 1,000 residents (NAICS Sectors)	\N	2011	158	t	f	2010, 2011	\N
556	93	neiemp	Total number of Employees by Selected Nieghborhood Industry (NAICS Sectors)	\N	2011	159	t	f	2010, 2011	\N
557	110	regvote	Percent of Population (Over the age of 18) Who are Registered to Vote	\N	2011	160	f	f	2010	\N
558	138	voted	Percent Population (Over the age of 18) Who Voted in the General Election	\N	2011	161	f	f	2010	\N
559	34	dirtyst	Rate of Dirty Streets and Alleys Reports per 1,000 Residents	\N	2011	162	t	f	2010, 2011	U.S. Bureau of the Census
560	26	clogged	Rate of Clogged Storm Drain Reports per 1,000 Residents	\N	2011	163	t	f	2010, 2011	U.S. Bureau of the Census
561	38	drvalone	Percent of Population that Drove Alone to Work	\N	2011	164	t	f	2007-2011	\N
562	23	carpool	Percent of Population that Carpool to Work	\N	2011	165	t	f	2007-2011	\N
563	105	pubtran	Percent of Population that Uses Public Transportation to Get to Work	\N	2011	166	t	f	2007-2011	\N
564	139	walked	Percent of Population that Walks to Work	\N	2011	167	t	f	2007-2011	\N
565	127	trav14_	Percent of Employed Population with Travel Time to Work of 0-14 Minutes	\N	2011	168	t	f	2007-2011	\N
566	128	trav29_	Percent of Employed Population with Travel Time to Work of 15-29 Minutes	\N	2011	169	t	f	2007-2011	\N
567	129	trav44_	Percent of Employed Population with Travel Time to Work of 30-44 Minutes	\N	2011	170	t	f	2007-2011	\N
568	130	trav45_	Percent of Employed Population with Travel Time to Work of 45 Minutes and Over	\N	2011	171	t	f	2007-2011	\N
569	132	trees	Percent of Area Covered by Trees	\N	2011	172	t	f	2007	\N
570	\N	\N	Air Quality Risk	\N	2011	173	f	t	\N	\N
571	\N	\N	Percent of Area Covered by Impervious Surface	\N	2011	174	t	t	\N	\N
572	27	cmos	Number of Community Managed Open Spaces	\N	2011	175	t	f	2011	\N
573	140	waterc	Median Daily Water Consumption	\N	2011	176	t	f	2011	\N
574	\N	\N	Number of Downspout Disconnections per 1,000 Residences	\N	2011	177	f	t	\N	\N
575	\N	\N	Number of Public Trashcans	\N	2011	178	f	t	\N	\N
576	\N	\N	Rate of Sewer/Water Main Breaks per 1,000 Residents	\N	2011	179	f	t	\N	\N
577	\N	\N	Natural gas utilization	\N	2011	180	f	t	\N	\N
578	\N	\N	Energy Use	\N	2011	181	f	t	\N	\N
579	48	heatgas	Percent of Residences Heated by Utility Gas	\N	2011	182	t	f	2007-2011	\N
580	42	elheat	Percent of Residences Heated by Electricity	\N	2011	183	t	f	2007-2011	\N
581	97	novhcl	Percent of Households with No Vehicles Available	\N	2011	184	t	f	2007-2011	\N
583	141	weather	Percent of Homes Weatherized	\N	2011	186	t	f	2010, 2011	Maryland Property View
584	142	wlksc	Walk Score	\N	2011	187	t	f	2011	\N
585	\N	\N	Aggregate Number of Community Assets	\N	2011	188	f	t	\N	\N
586	\N	\N	Transit data	\N	2011	189	f	t	\N	\N
587	\N	\N	Number of Bike Racks per 1,000 Residents	\N	2011	190	f	t	\N	\N
588	\N	\N	Road Quality	\N	2011	191	f	t	\N	\N
589	\N	\N	Number of Miles of Bike Lanes	\N	2011	192	f	t	\N	\N
590	\N	\N	Percent  of persons by occupation classification (major classifications)	\N	2011	193	f	t	\N	\N
591	99	othrcom	Percent of Population Using Other Means to Commute to Work (Taxi, Motorcycle, Bicycle, Other)	\N	2011	194	t	f	2007-2011	\N
592	41	eenrol	Number of Students Enrolled in 1st - 5th Grade	\N	2011	195	t	f	2009-2010, 2010-2011	\N
593	82	menrol	Number of Students Enrolled in 6th - 8th Grade	\N	2011	196	t	f	2009-2010, 2010-2011	\N
594	50	henrol	Number of Students Enrolled in 9th - 12th Grade	\N	2011	197	t	f	2009-2010, 2010-2011	\N
596	\N	male	Total Male Population	The total number of men of all ages of all ages that live within an area.	2014	2	f	f	2010	\N
605	\N	age5_	Percent of Population 0-5 years old	The percent of persons 5 years or under out of all persons living in an area.	2014	11	f	f	2010	\N
789	\N	\N	Number of Public Trashcans	\N	2014	178	f	t	\N	\N
644	36	domvio	Domestic Violence Calls For Service per 1,000 Residents	The rate of calls to emergency 911 for domestic violence per 1,000 residents in an area. Calls for service are used rather than actual crime incidents since domestic violence can be classified as one of several types of criminal offenses. It is important to also note that not every case of domestic violence is reported and some claims of abuse may be unfounded.	2014	54	f	f	2010, 2011, 2012	U.S. Bureau of the Census
642	137	viol	Violent Crime Rate per 1,000 Residents	The violent crime rate measures the number of Part 1 crimes identified as being violent (homicide, rape, aggravated assault, and robbery) that are reported to the Police Department. These incidents are per 1,000 residents in the neighborhood to allow for comparison across areas.	2014	52	t	f	2010, 2011, 2012	U.S. Bureau of the Census
615	52	hh25inc	Percent of Households Earning Less than $25,000	The percentage of households earning less than $25,000 out of all households in an area.	2014	21	t	f	2009-2013	\N
620	58	hhpov	Percent of Family Households Living Below the Poverty Line	This indicator measures the percentage of households whose income fell below the poverty threshold out of all households in an area.  Federal and state governments use such estimates to allocate funds to local communities. Local communities use these estimates to identify the number of individuals or families eligible for various programs.	2014	27	t	f	2009-2013	\N
629	112	resrehab	Percentage of Properties with Rehabilitation Permits Exceeding $5,000	The portion of residential properties that have applied for and received a permit to renovate the interior and/or exterior of a property where the cost of renovation will exceed $5,000.  The threshold of $5,000 is used to differentiate a minor and more significant renovation project.	2014	36	f	f	2010, 2011, 2012	Maryland Property View
632	111	reosa	Percentage of Residential Sales in Foreclosure (REO)	The percentage of properties where the  lending company or loan servicer has filed a foreclosure proceeding with the Baltimore City Circuit Court out of all residential properties within an area.  This is not a measure of actual foreclosures since not every property that receives a filing results in a property dispossession.	2014	39	f	f	2010, 2011, 2012	\N
595	\N	tpop	Total Population	The total number of persons of all ages that live within an area. This indicator is frequently used to normalize data to allow for comparison across areas.	2014	1	f	f	2010	\N
606	\N	age18_	Percent of Population 6-18 years old	The percent of persons aged 6 to 18 years old out of all persons living in an area.	2014	12	f	f	2010	\N
616	53	hh40inc	Percent of Households Earning $25,000 to $40,000	The percentage of households earning between $25,000 and $39,999 out of all households in an area.	2014	22	t	f	2009-2013	\N
627	135	vacant	Percentage of Residential Properties that are Vacant and Abandoned	The percentage of residential properties that have been classified as being vacant and abandoned by the Baltimore City Department of Housing out of all properties.  Properties are classified as being vacant and abandoned if: the property is not habitable and appears boarded up or open to the elements; the property was designated as being vacant prior to the current year and still remains vacant; and the property is a multi-family structure where all units are considered to be vacant.	2014	34	f	f	2010, 2011, 2012	Maryland Property View
661	8	abshs	Percent of 9th-12th Grade Students that are Chronically Absent (Missing at least 20 days)	The percentage of 9th-12th grade students that were recognized as being absent from public school 20 or more days out of all students.	2014	75	f	f	2009-2010, 2010-2011, 2012	\N
677	28	compl	High School Completion Rate	The percentage of 12th graders in a school year that successfully completed high school out of all 12th graders within an area. Completers are identified as completing their program of study at the high school level and satisfying the graduation requirements for a Maryland High School Diploma or the requirements for a Maryland Certificate of Program Completion	2014	92	f	f	2009-2010, 2010-2011, 2012	\N
689	45	fastfd	Fast Food Outlet Density (per 1,000 Residents)	The Johns Hopkins Center for a Livable Future (CLF) obtained the food permit list from the Baltimore City Health Department in August 2011, which includes all sites that sell food, such as stores, restaurants and temporary locations such as farmers� market stands and street carts. The restaurants were grouped into three categories, including full service restaurants, fast food chains and carryouts. Carryout and fast food chain restaurants were extracted from the restaurant layer and spatially joined with the 2010 Community Statistical Area (CSA) data layer, provided by BNIA-JFI. The prepared foods density, per 1,000 people, was calculated for each CSA using the CSA�s population and the total number of carryout and fast food restaurants, including vendors selling prepared foods in public markets, in each CSA.	2014	110	f	f	2011, 2012	\N
639	101	owntax	Number of Homeowner's Tax Credits per 1,000 Residential Units	The number of residential properties that received the homeowners tax credit per 1,000 residential properties within an area.  The homeowner�s tax credit sets a limit on the amount of property taxes any homeowner must pay based upon his or her income.	2014	48	t	f	2011, 2012	Maryland Property View
651	91	narc	Number of Narcotics Calls for Service per 1,000 Residents	The rate of calls for narcotics per 1,000 residents in an area. Since the data comes from 911 calls, it is possible that multiple calls could be made for a single incident.	2014	61	f	f	2010, 2011, 2012	U.S. Bureau of the Census
597	\N	female	Total Female Population	The total number of women of all ages that live within an area.	2014	3	f	f	2010	\N
609	\N	age65_	Percent of Population 65 years and over	The total number of persons 65 years old and above out of all persons living in an area.	2014	15	f	f	2010	\N
619	57	hhm75	Percent of Households Earning More than $75,000	The percentage of households earning more than $75,000 out of all households in an area.	2014	25	t	f	2009-2013	\N
630	125	totalres	Total Number of Residential Properties	The total number of residential properties located within an area as identified by Maryland Property View.  It is important to note that that this indicator is a count of properties (single family homes, condominiums, and duplexes) and that a property can be comprised of multiple housing units.	2014	37	f	f	2010, 2011, 2012	\N
640	96	nomail	Percent Residential Properties that do Not Receive Mail	The percentage of residential addresses for which the United States Postal Service has identified as being unoccupied (no mail collection) for a period of at least 90 days or longer.  These properties may be habitable, but are not currently being occupied.  It is important to note that a single residential property can contain more than one address.	2014	49	f	f	2010, 2011, 2012	\N
652	22	caracc	Number of Automobile Accident Calls for Service per 1,000 Residents	The rate of calls for accidents involving motor vehicles per 1,000 residents in an area. Since the data comes from 911 calls, it is possible that multiple calls could be made for a single incident. Additionally, not every accident involving a motor vehicle is reported to the Police Department.	2014	62	f	f	2010, 2011, 2012	U.S. Bureau of the Census
678	115	sclsw	Percent of Students Switching Schools within School Year	The percentage of 1st through 12th graders who change schools out of all students in a school year. Students must have attended both schools for which they were registered for at least one day.  Additionally, this indicator only identifies the share of students that change schools for any reasons and not the frequency, number of school switches, or change in residences in a school year.  The percentage reflects the last home address available for the student who changed schools.  This may or may not be the home address provided for the first school that they are registered to attend.	2014	94	f	f	2010-2011, 2012	\N
662	121	susp	Percentage of Students Suspended or Expelled During School Year	The percentage of students of any grade level that are formally suspended or expelled for any reason during the school year out of all public school students within an area.	2014	76	f	f	2009-2010, 2010-2011, 2012	\N
700	13	artemp	Total Employment in Arts-Related Businesses	The number of persons employed in arts-related businesses (both for-profit and non-profit). This number does not count those persons who identify themselves as being artists and does not count sole proprietorships or persons who work part-time in the arts. The same industries used to calculate the rate of arts-related businesses are used to calculate total employment in arts-related businesses.	2014	132	t	f	2010, 2011, 2012	\N
690	76	lifexp	Life Expectancy	The average number of years a newborn can expect to live, assuming he or she experiences the currently prevailing rates of death through their lifespan.	2014	114	f	f	2011, 2012, 2013, 2014	\N
598	\N	paa	Percent of Residents - Black/African-American (Non-Hispanic)	The total number of persons that identify themselves as being racially Black or African American (and ethnically non-Hispanic) out of the total number of persons living in an area.  �Black or African American� refers to a person having origins in any of the Black racial groups of Africa. It includes people who indicated their race as �Black�.	2014	4	f	f	2010	\N
611	\N	femhhs	Percent of Female-Headed Households with Children Under 18	The percentage of female-headed households with children under 18 out of all households with children under 18 in an area.	2014	17	f	f	2010	\N
656	6	aastud	Percent of Students that are African American (non-Hispanic)	The percentage of Black/African American students of any grade that attend any Baltimore City Public School out of all public school students within an area in a school year.	2014	70	f	f	2009-2010, 2010-2011, 2012	\N
623	35	dom	Median Number of Days on the Market	The median number of days that homes listed for sale sits on the public market in a given area.  This time period is from the date it is listed for sale till the day the contract of sale is signed.  Private (non-listed) home sale transactions are not included in this indicator.  The median days on market is used as opposed to the average so that both extremely high and extremely low days on the market do not distort the length of time for which homes are listed on the market.	2014	30	t	f	2010, 2011, 2012	\N
646	71	juvviol	Juvenile Arrest Rate for Violent Offenses per 1,000 Juveniles	The number of persons aged 10 to 17 arrested for violent offenses per 1,000 juveniles that live in an area. Violent offenses may include homicide, rape, assault (with or without a weapon), and robbery. This indicator is calculated by where the arrested juvenile was arrested and not by where the crime is committed. Arrests are used instead of crimes committed since not all juveniles that are arrested are charged with committing a crime. This indicator also excludes offenders who are later charged as adults for their crime(s).	2014	56	f	f	2011, 2012	U.S. Bureau of the Census
634	30	constper	Number of New Construction Permits per 1,000 Residential Properties	The number of permits issued for new residential buildings per 1,000 existing residential properties within a community.  The permits are analyzed by date of issue and not date of completion.	2014	42	t	f	2011, 2012	Maryland Property View
666	78	math3	Percentage of 3rd Grade Students Passing MSA Math	The percentages of students passing M.S.A. exams in reading and mathematics in 3rd, 5th, and 8th grades. Maryland School Assessment (MSA) scores measure the number of students scoring in one of three classifications out of all students enrolled in that grade. Students can either be rated as advanced, proficient, or having basic knowledge of a subject. This indicator includes only those students who have tested as advanced or proficient.	2014	81	f	f	2009-2010, 2010-2011, 2012	\N
599	\N	pwhite	Percent of Residents - White/Caucasian (Non-Hispanic)	The total number of persons that identify themselves as being racially White (and ethnically non-Hispanic) out of the total number of persons living in an area.   �White� refers to a person having origins in any of the original peoples of Europe, the Middle East, or North Africa. It includes people who indicated their race(s) as �White�.	2014	5	f	f	2010	\N
612	\N	fam	Percent of Households with Children Under 18	The percentage of households with children living in the household that are under the age of 18 out of all households.	2014	18	f	f	2010	\N
657	144	wstud	Percent of Students that are White (non-Hispanic)	The percentage of white (non-Hispanic) students of any grade that attend any Baltimore City Public School out of all public school students within an area in a school year.	2014	71	f	f	2009-2010, 2010-2011, 2012	\N
667	106	read3	Percentage of 3rd Grade Students Passing MSA Reading	The percentages of students passing M.S.A. exams in reading and mathematics in 3rd, 5th, and 8th grades. Maryland School Assessment (MSA) scores measure the number of students scoring in one of three classifications out of all students enrolled in that grade. Students can either be rated as advanced, proficient, or having basic knowledge of a subject. This indicator includes only those students who have tested as advanced or proficient.	2014	82	f	f	2009-2010, 2010-2011, 2012	\N
674	64	hsagov	Percentage of Students Passing H.S.A. Government	The percentage of high school students who have successfully passed the H.S.A. exams out of all high school students that took the exam in the school year (considering only the highest score per subject area). In Maryland, all students who entered 9th grade in or after 2005 are required to take and pass the High School Assessments (H.S.A.) in order to graduate, including students in special education, English language learners (ELLs), and students with 504 plans. There are currently three H.S.A. exams: English, Algebra/Data Analysis; and Biology (a H.S.A. in Government has since been discontinued). Students can retake the HSAs as many times as necessary to pass.	2014	89	f	f	2009-2010, 2010-2011, 2012	\N
624	116	shomes	Number of Homes Sold	The portion of the homes and condominiums sold that were identified as being owned by the bank (REO) out of all residential properties sold in a calendar year.	2014	31	f	f	2010, 2011, 2012	\N
635	15	baltvac	Percentage of Vacant Properties Owned by Baltimore City	The percent of properties that are classified as being vacant and abandoned that are owned by Baltimore City.  Baltimore City has come to own these properties through a variety of ways including (but not limited to) eminent domain, unpaid tax or water bills, and purchase	2014	43	f	f	2011, 2012	Maryland Property View
647	70	juvdrug	Juvenile Arrest Rate for Drug-Related Offenses per 1,000 Juveniles	The number of persons aged 10 to 17 for drug-related offenses per 1,000 juveniles that live in an area. Drug-related offenses include arrests for possession, sale, manufacture, or abuse of illegal drugs, including alcohol. This indicator is calculated by where the arrested juvenile was arrested and not by where the crime is committed. Arrests are used instead of crimes committed since not all juveniles that are arrested are charged with committing a crime. This indicator also excludes offenders who are later charged as adults for their crime(s).	2014	57	f	f	2011, 2012	U.S. Bureau of the Census
600	\N	pasi	Percent of Residents - Asian (Non-Hispanic)	The total number of persons that identify themselves as being Asian (and non-Hispanic) out of the total number of persons living in an area.  �Asian� refers to a person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam.	2014	6	f	f	2010	\N
607	\N	age24_	Percent of Population 19-24 years old	The percent of persons aged 19 to 24 years old out of all persons living in an area.	2014	13	f	f	2010	\N
686	\N	leadv	Percent of Lead Violations per 1,000 Residential Units	\N	2014	105	f	f	2011, 2012	Maryland Property View
641	32	crime	Part 1 Crime Rate per 1,000 Residents	The part 1 crime rate captures incidents of homicide, rape, aggravated assault, robbery, burglary, larceny, and auto theft that are reported to the Police Department. These incidents are per 1,000 residents in the neighborhood to allow for comparison across areas.	2014	50	t	f	2010, 2011, 2012	U.S. Bureau of the Census
617	54	hh60inc	Percent of Households Earning $40,000 to $60,000	The percentage of households earning between $40,000 and $59,999 out of all households in an area.	2014	23	t	f	2009-2013	\N
621	56	hhchpov	Percent of Children Living Below the Poverty Line	This indicator measures the percentage of persons under the age of 18 living in households where the total income fell below the poverty threshold out of all children in households in an area.  Federal and state governments use such estimates to allocate funds to local communities. Local communities use these estimates to identify the number of individuals or families eligible for various programs.	2014	28	t	f	2009-2013	\N
631	24	cashsa	Percentage of Residential Sales for Cash	The portion of homes and condominiums sold for cash out of all residential properties sold in a calendar year. These types of sales tend to signify investor-based purchases as homes purchased for cash either become rental properties or later sold again in an effort to generate a profit.	2014	38	t	f	2010, 2011, 2012	\N
645	69	juvarr	Juvenile Arrest Rate per 1,000 Juveniles	The number of persons aged 10 to 17 arrested per 1,000 juveniles that live in an area. This indicator is calculated by where the arrested juvenile was arrested and not by where the crime is committed. Arrests are used instead of crimes committed since not all juveniles that are arrested are charged with committing a crime. This indicator also excludes offenders who are later charged as adults for their crime(s).	2014	55	f	f	2011, 2012	U.S. Bureau of the Census
601	\N	p2more	Percent of Residents - Two or More Races (Non-Hispanic)	The total number of persons that identify themselves as being of two or more races (and non-Hispanic) out of the total number of persons living in an area.	2014	7	f	f	2010	\N
613	\N	hhsize	Average Household Size	The median value of number of persons living within a household.  The average size of a household is obtained by dividing the number of persons in households by the number of households (or householders).	2014	19	f	f	2010	\N
625	100	ownroc	Percentage of Housing Units that are Owner-Occupied	The percentage of homeowners that are the principal residents of a particular residential property out of all residential properties.  It is important to note that a portion of these owner-occupied properties may be subdivided and have tenants that pay rent and are not included in the calculation.	2014	32	t	f	2010, 2011, 2012	\N
636	10	affordm	Affordability Index - Mortgage	The percentage of households that pay more than 30% of their total household income on mortgage and other housing-related expenses	2014	44	t	f	2009-2013	\N
648	117	shoot	Number of Shootings per 1,000 Residents	The rate of 911 calls for shootings per 1,000 residents in an area. Since the data comes from 911 calls, it is possible that multiple calls could be made for a single incident.	2014	58	t	f	2010, 2011, 2012	U.S. Bureau of the Census
602	\N	ppac	Percent of Residents - All Other Races (Hawaiian/ Pacific Islander, Alaskan/ Native American Other Race) (Non-Hispanic)	The total number of persons that identify themselves as being of either American Indian, Alaskan Native, Native Hawaiian or Other Pacific Islander, or some other race (non-Hispanic) out of the total number of persons living in an area.	2014	8	f	f	2010	\N
610	\N	hhs	Total Number of Households	A household consists of all the people occupying a housing unit.  A household includes related and unrelated persons, if any, such as lodgers, foster children, wards, or employees who share the housing unit. A person living alone in a housing unit, or a group of unrelated people sharing a housing unit such as partners or roomers, is also counted as a household. The count of households excludes group quarters.	2014	16	f	f	2010	\N
622	113	salepr	Median Price of Homes Sold	The median home sales price is the middle value of the prices for which homes are sold (both market and private transactions) within a calendar year.  The median value is used as opposed to the average so that both extremely high and extremely low prices do not distort the prices for which homes are sold.  This measure does not take into account the assessed value of a property.	2014	29	f	f	2010, 2011, 2012	\N
633	33	demper	Number of Demolition Permits per 1,000 Residential Properties	The number of permits issued for the demolition of residential buildings per 1,000 existing residential properties.  The permits are analyzed by date of issue and not date of actual demolition.	2014	41	t	f	2011, 2012	Maryland Property View
643	104	prop	Property Crime Rate per 1,000 Residents	The property crime rate measures the number of Part 1 crimes identified as being property-based (burglary and auto theft) that are reported to the Police Department. These incidents are per 1,000 residents in the neighborhood to allow for comparison across areas.	2014	53	t	f	2010, 2011, 2012	U.S. Bureau of the Census
654	81	mattend	Number of Students Ever Attended 6th - 8th Grade	The number of children who have registered for and attend 6th through 8th grade at a Baltimore City Public School at any point in the school year.	2014	67	f	f	2009-2010, 2010-2011, 2012	\N
664	120	sped	Percentage of Students Enrolled in Special Education Programs	The percentage of students of any grade that are eligible for and participating in public school special education programs out of all students. This includes all students with any diagnosed disability	2014	78	f	f	2009-2010, 2010-2011, 2012	\N
691	85	mort1_	Infant Mortality	The number of infant deaths (babies under one year of age) per 1,000 live births within the area in a five year period.  This is the most stable and commonly measured indicator of mortality in this age group.	2014	115	f	f	2011, 2012, 2013, 2014	\N
701	43	empl	Percent  Population 16-64 Employed	The number of persons between the ages of 16 and 64 formally employed or self-employed and earning a formal income. It is used to understand how many persons are working out of the entire population, not just those in the labor force (persons who may be looking for work or working).	2014	134	t	f	2009-2013	\N
707	14	bahigher	Percent  Population (25 years and over) with a Bachelor's Degree or Above	The percentage of persons that have completed, graduated, or received a Bachelor�s or an advanced degree. This is an indicator used to measure the portion of the population having an advanced level of skills needed for the workplace. Persons under the age of 25 are not included in this analysis since many of these persons are still attending various levels of schooling.	2014	140	t	f	2009-2013	\N
679	114	sclemp	Percentage of Population aged 16-19 in School and/or Employed	The percentage of persons aged 16 to 19 who are in school and/or are employed out of all persons in their age cohort.	2014	98	t	f	2009-2013	\N
603	\N	phisp	Percent of Residents - Hispanic	The total number of persons that identify their ethnicity as being Hispanic or Latino out of the total number of persons living in an area. Hispanic origin can be viewed as the heritage, nationality group, lineage, or country of birth of the person or the person�s parents or ancestors before their arrival in the United States. People who identify their origin as Hispanic, Latino, or Spanish may be any race.	2014	9	f	f	2010	\N
614	83	mhhi	Median Household Income	The median household income is the middle value of the incomes earned by households within an area for the prior year.  The median value is used as opposed to the average so that both extremely high and extremely low prices do not distort the total amount of income earned by households in an area.	2014	20	f	f	2009-2013	\N
637	11	affordr	Affordability Index - Rent	The percentage of households that pay more than 30% of their total household income on rent and related expenses out of all households in an area.	2014	45	t	f	2009-2013	\N
659	7	abse	Percent of 1st-5th Grade Students that are Chronically Absent (Missing at least 20 days)	The percentage of 1st-5th grade students that were recognized as being absent from public school 20 or more days out of all students.	2014	73	f	f	2009-2010, 2010-2011, 2012	\N
669	107	read5	Percentage of 5th Grade Students Passing MSA Reading	The percentages of students passing M.S.A. exams in reading and mathematics in 3rd, 5th, and 8th grades. Maryland School Assessment (MSA) scores measure the number of students scoring in one of three classifications out of all students enrolled in that grade. Students can either be rated as advanced, proficient, or having basic knowledge of a subject. This indicator includes only those students who have tested as advanced or proficient.	2014	84	f	f	2009-2010, 2010-2011, 2012	\N
676	37	drop	High School Dropout/Withdrawl Rate	The percentage of 9th through 12th graders who withdraw from public school out of all high school students in a school year. Withdraw codes are used as a proxy for dropping out of school based upon the expectation that withdrawn students are no longer receiving educational services. A dropout is defined as a student who, for any reason other than death, leaves school before graduation or the completion of a Maryland-approved education program and is not known to enroll in another school or State-approved program during a current school year.	2014	91	f	f	2009-2010, 2010-2011, 2012	\N
626	46	fore	Percentage of Properties Under Mortgage Foreclosure	The percentage of properties where the  lending company or loan servicer has filed a foreclosure proceeding with the Baltimore City Circuit Court out of all residential properties within an area.  This is not a measure of actual foreclosures since not every property that receives a filing results in a property dispossession.	2014	33	t	f	2010, 2011, 2012	Maryland Property View
649	47	gunhom	Number of Gun-Related Homicides per 1,000 Residents	The rate of homicides by firearm as reported in the Part 1 crime data per 1,000 residents in an area.	2014	59	t	f	2010, 2011, 2012	U.S. Bureau of the Census
688	77	liquor	Liquor Outlet density (per 1,000 Residents)	This indicator reflects the number of business establishments that possess a Class A (Off Sale package goods no on-premises consumption - 6 days, 6:00 a.m.- Midnight. No Sunday sales except Sundays between Thanksgiving Day and New Year's Day upon issuance of a special license for each Sunday) or BD7 (tavern) business license that allows them to sell beer, wine, or liquor. Other liquor licenses to restaurants or on-premise consumption were not included in this analysis. This number is provided by 1,000 residents to allow for comparison across neighborhoods	2014	109	t	f	2010, 2011, 2012	U.S. Bureau of the Census
604	\N	racdiv	Racial Diversity Index	The percent chance that two people picked at random within an area will be of a different race/ethnicity.  This number does not reflect which race/ethnicity is predominant within an area.  The higher the value, the more racially and ethnically diverse an area.	2014	10	f	f	2010	\N
608	\N	age64_	Percent of Population 25-64 years old	The percent of persons aged 25 to 64 years old out of all persons living in an area.	2014	14	f	f	2010	\N
638	60	homtax	Number of Homestead Tax Credits per 1,000 Residential Units	The number of residential properties that received the homestead tax credit per 1,000 residential properties within an area.  The Homestead Credit limits the increase in taxable assessments each year to a fixed percentage. Every county and municipality in Maryland is required to limit taxable assessment increases to 10% or less each year, with the Baltimore City rate capped at 4%.	2014	47	t	f	2011, 2012	Maryland Property View
660	9	absmd	Percent of 6th-8th Grade Students that are Chronically Absent (Missing at least 20 days)	The percentage of 6th-8th grade students that were recognized as being absent from public school 20 or more days out of all students.	2014	74	f	f	2009-2010, 2010-2011, 2012	\N
650	25	caslt	Number of Common Assault Calls for Service per 1,000 Residents	The rate of calls for assaults that do not involve a weapon per 1,000 residents in an area. Since the data comes from 911 calls, it is possible that multiple calls could be made for a single incident.	2014	60	f	f	2010, 2011, 2012	U.S. Bureau of the Census
670	80	math8	Percentage of 8th Grade Students Passing MSA Math	The percentages of students passing M.S.A. exams in reading and mathematics in 3rd, 5th, and 8th grades. Maryland School Assessment (MSA) scores measure the number of students scoring in one of three classifications out of all students enrolled in that grade. Students can either be rated as advanced, proficient, or having basic knowledge of a subject. This indicator includes only those students who have tested as advanced or proficient.	2014	85	f	f	2009-2010, 2010-2011, 2012	\N
681	124	termbir	Percent of Births Delivered at Term (37-42 Weeks)	The percentage of births delivered at term measures the percentage of births in a calendar year where the baby is delivered between 37 and 42 weeks of gestation.	2014	100	f	f	2010, 2011, 2012	U.S. Bureau of the Census
692	84	mort14_	Mortality by Age (1-14 years old)	The number of deaths of persons between the ages of one and 14 per 10,000 persons within the area in a five year period.	2014	116	f	f	2011, 2012, 2013, 2014	\N
702	133	unempl	Percent  Population 16-64 Unemployed and Looking for Work	The number of persons between the ages of 16 and 64 not working out of all persons, not just those in the labor force (persons who may be looking for work). These persons are seeking work that pays a formal income.	2014	135	t	f	2009-2013	\N
708	29	comprop	Total Number of Commercial Properties	The total number of commercial properties located within an area in a particular year.	2014	141	t	f	2010, 2011, 2012	\N
618	55	hh75inc	Percent of Households Earning $60,000 to $75,000	The percentage of households earning between $60,000 and $74,999 out of all households in an area.	2014	24	t	f	2009-2013	\N
628	136	vio	Percentage of Residential Properties with Housing Violations (Excluding Vacants)	The percentage of residential properties that have received at least one housing code violation from the Baltimore City Department of Housing out of all properties.  Properties whose fa�ade, structure, and/or surrounding area violate the City�s Housing Code are issued a notice and are considered open till the property is found in compliance. A property may receive multiple violations.	2014	35	f	f	2010, 2011, 2012	Maryland Property View
752	\N	\N	Number of All Jobs Filled by Employees	The number of total jobs per CSA (only counts jobs that are currently held by employees)	2014	204	f	f	2010, 2011, 2012, 2013, 2014	\N
668	79	math5	Percentage of 5th Grade Students Passing MSA Math	The percentages of students passing M.S.A. exams in reading and mathematics in 3rd, 5th, and 8th grades. Maryland School Assessment (MSA) scores measure the number of students scoring in one of three classifications out of all students enrolled in that grade. Students can either be rated as advanced, proficient, or having basic knowledge of a subject. This indicator includes only those students who have tested as advanced or proficient.	2014	83	f	f	2009-2010, 2010-2011, 2012	\N
687	122	tanf	Percent of Families Receiving TANF	Temporary Assistance for Needy Families (TANF) is a federal assistance program. The Act provides temporary financial assistance while aiming to get people off of that assistance, primarily through employment.	2014	106	t	f	2011, 2012	U.S. Bureau of the Census
665	109	ready	Kindergarten School Readiness	The percentage of children whose composite score indicates full school readiness out of all kindergarten school children tested within an area in a school year. The Maryland Model for School Readiness (MMSR) is an assessment and instructional system that was designed to provide parents, teachers, and early childhood providers with a common understanding of what children know and are able to do upon entering school. Under the MMSR system, all children entering kindergarten are assessed for level of mastery across several learning domains. These domains include: social and personal development; language and literacy; mathematical thinking; scientific thinking; social studies; the arts; and physical development and health. Kindergarten teachers must evaluate students during the first few months of the kindergarten year using selected Work Sampling System (WSS) indicators and report their ratings by the end of November of each year to the state.	2014	80	f	f	2010-2011, 2012	\N
762	\N	\N	Persons Receiving a GED	\N	2014	93	f	t	\N	\N
773	\N	\N	Causes of Death (analysis of top causes)	\N	2014	124	f	t	\N	\N
783	\N	\N	Percent of CSA that is Either Low or Moderate income (by Census tract)	\N	2014	154	f	t	\N	\N
793	\N	\N	Number of Photovoltaic/Solar Permits	\N	2014	185	f	t	\N	\N
672	63	hsaeng	Percentage of Students Passing H.S.A. English	The percentage of high school students who have successfully passed the H.S.A. exams out of all high school students that took the exam in the school year (considering only the highest score per subject area). In Maryland, all students who entered 9th grade in or after 2005 are required to take and pass the High School Assessments (H.S.A.) in order to graduate, including students in special education, English language learners (ELLs), and students with 504 plans. There are currently three H.S.A. exams: English, Algebra/Data Analysis; and Biology (a H.S.A. in Government has since been discontinued). Students can retake the HSAs as many times as necessary to pass.	2014	87	f	f	2009-2010, 2010-2011, 2012	\N
658	68	hstud	Percent of Students that are Hispanic	The percentage of students of any grade level who identify their ethnicity as being Hispanic that attend any Baltimore City Public School out of all public school students within an area in a school year. Ethnicity is separate from a student�s race.	2014	72	f	f	2009-2010, 2010-2011, 2012	\N
682	17	birthwt	Percent of Babies Born with a Satisfactory Birth Weight	The percentage of children born with a birth weight of at least 5 � pounds out of all births in the area.	2014	101	f	f	2010, 2011, 2012	U.S. Bureau of the Census
731	129	trav44_	Percent of Employed Population with Travel Time to Work of 30-44 Minutes	The percentage of commuters that spend between 30 and 44 minutes travelling to work out of all commuters aged 16 and above.	2014	170	t	f	2009-2013	\N
663	44	farms	Percentage of Students Receiving Free or Reduced Meals	The percentage of students of any grade that are eligible for and receive free or reduced school meals out of all public school students. Eligibility for this program is based on the student�s household income.	2014	77	f	f	2009-2010, 2010-2011, 2012	\N
671	108	read8	Percentage of 8th Grade Students Passing MSA Reading	The percentages of students passing M.S.A. exams in reading and mathematics in 3rd, 5th, and 8th grades. Maryland School Assessment (MSA) scores measure the number of students scoring in one of three classifications out of all students enrolled in that grade. Students can either be rated as advanced, proficient, or having basic knowledge of a subject. This indicator includes only those students who have tested as advanced or proficient.	2014	86	f	f	2009-2010, 2010-2011, 2012	\N
680	123	teenbir	Teen Pregnancy Rate per 1,000 Females (aged 15-19)	The rate of female teens aged 15-19 that gave birth per 1,000 females aged 15-19.	2014	99	f	f	2010, 2011, 2012	U.S. Bureau of the Census
685	40	ebll	Percent of Children (aged 0-6) with Elevated Blood Lead Levels	The number of children aged 0-6 that are found to either have elevated blood lead levels  (?10Mg/dL) or lead poisoning (?20 Mg/dL) out of the number of children tested within an area in a calendar year.	2014	104	f	f	2010, 2011, 2012	\N
694	87	mort44_	Mortality by Age (25-44 years old)	The number of deaths of persons between the ages of 25 and 44 per 10,000 persons within the area in a five year period	2014	118	f	f	2011, 2012, 2013, 2014	\N
704	134	unempr	Unemployment Rate	The number of persons between the ages of 16 and 64 that are in the labor force (and are looking for work) but are not currently working.	2014	137	t	f	2009-2013	\N
740	142	wlksc	Walk Score	The Walk Score� is calculated by mapping out the distance to amenities in nine different categories (grocery stores, restaurants, shopping, coffee shops, banks, parks, schools, book stores/libraries, and entertainment) and are weighted according to importance. The distance to a location, counts, and weights determine a base score of an address, which is then normalized to a score from 0 to 100.  More information on Walk Score can be found at http://www.walkscore.com/.	2014	187	f	f	2011, 2012	\N
743	41	eenrol	Number of Students Officially Enrolled in 1st - 5th Grade	The number of children who have registered for and attend 1st through 5th grade at a Baltimore City Public School as of September 30th. This count only includes students enrolled in public schools.	2014	195	f	f	2009-2010, 2010-2011, 2012	\N
713	143	wrkout	Percent of Employed Residents who Work Outside the City	The percentage of workers that are employed by jobs located outside of Baltimore City. Only persons who report being employed and are at least 16 years old are included in the analysis.	2014	146	f	f	2010	\N
721	110	regvote	Percent of Population (Over the age of 18) Who are Registered to Vote	The percentage of persons over the age of 18 registered to vote out of all persons 18 years and over..	2014	160	f	f	2010, 2012	\N
683	103	prenatal	Percent of Births Where the Mother Received Early Prenatal Care (First Trimester)	The percentage of births where the mother received prenatal care during the first trimester of the pregnancy in a calendar year out of all births within an area. This information is calculated by the Vital Statistics registration information collected from each live birth.	2014	102	f	f	2010, 2011, 2012	U.S. Bureau of the Census
693	86	mort24_	Mortality by Age (15-24 years old)	The number of deaths of persons between the ages of 15 and 24 per 10,000 persons within the area in a five year period.	2014	117	f	f	2011, 2012, 2013, 2014	\N
703	95	nilf	Percent  Population 16-64 Not in Labor Force	The number of persons who are not in the labor force out of all persons between the ages of 16 and 64 in the area. There are several reasons why persons may not be included in the labor force. These reasons may include: they are caretakers for children or other family members; they attend school or job training; they may have a disability; and they are discouraged or frustrated and have given up seeking a job or have a history that may include criminal activity.	2014	136	t	f	2009-2013	\N
696	89	mort84_	Mortality by Age (65-84 years old)	The number of deaths of persons between the ages of 65 and 84 per 10,000 persons within the area in a five year period.	2014	120	f	f	2011, 2012, 2013, 2014	\N
756	\N	\N	Percentage of Part 1 Crimes that Occur During Daytime	\N	2014	51	f	t	\N	\N
769	\N	\N	Rate of STDs per 1,000 Residents (Chlamydia, Gonorrhea, and Syphilis)	\N	2014	112	f	t	\N	\N
779	\N	\N	Percentage of Businesses that are Non-Profits	\N	2014	133	f	t	\N	\N
790	\N	\N	Rate of Sewer/Water Main Breaks per 1,000 Residents	\N	2014	179	f	t	\N	\N
714	16	banks	Number of Banks and Bank Branches per 1,000 Residents	The number of banks and bank branches per 1,000 residents within an area.	2014	149	t	f	2011, 2012	U.S. Bureau of the Census
725	38	drvalone	Percent of Population that Drove Alone to Work	The percentage of commuters driving alone out of all commuters aged 16 and above.	2014	164	t	f	2009-2013	\N
735	140	waterc	Median Daily Water Consumption	The median daily average water consumption of all city meters registering greater than 0.0 cubic meters per day.	2014	176	f	f	2011, 2012	\N
673	62	hsabio	Percentage of Students Passing H.S.A. Biology	The percentage of high school students who have successfully passed the H.S.A. exams out of all high school students that took the exam in the school year (considering only the highest score per subject area). In Maryland, all students who entered 9th grade in or after 2005 are required to take and pass the High School Assessments (H.S.A.) in order to graduate, including students in special education, English language learners (ELLs), and students with 504 plans. There are currently three H.S.A. exams: English, Algebra/Data Analysis; and Biology (a H.S.A. in Government has since been discontinued). Students can retake the HSAs as many times as necessary to pass.	2014	88	f	f	2009-2010, 2010-2011, 2012	\N
751	\N	mura	Number of Public Murals	The number of murals per CSA. Murals are also included in the �Public Art per 1,000 residents� indicator. Murals are separated out as a sub-indicator so they can be analyzed at the point-level.	2014	203	f	f	2014	\N
760	\N	\N	Percent of Students Enolled in CTE Programs	\N	2014	69	f	t	\N	\N
766	\N	\N	Percent of Persons receiving SNAP	\N	2014	107	f	t	\N	\N
776	\N	\N	Percent of persons with health insurance	\N	2014	127	f	t	\N	\N
787	\N	\N	Percent of Area Covered by Impervious Surface	\N	2014	174	f	t	\N	\N
798	\N	\N	Percent  of persons by occupation classification (major classifications)	\N	2014	193	f	t	\N	\N
746	51	hfai	Average Healthy Food Availability Index	The Johns Hopkins Center for a Livable Future (CLF) calculated HFAI scores for all food stores in Baltimore, in summer 2012, using an adapted version of the NEMS-S (Nutrition Environment Measures Survey in Stores) tool.  The NEMS-S tool was developed by researchers at the Rollins School of Public Health at Emory University to measure the nutritional environment of food retail stores and was designed to assess healthy food availability in grocery and convenience stores.  CLF obtained a food permit list from the Baltimore City Health Department in August 2011, which includes all sites that sell food, such as stores, restaurants, and temporary locations such as farmers� market stands and street carts.  HFAI scores range from zero to 28.5, with higher scores indicating more availability of healthy and whole food in a food store.	2014	198	f	f	2012	\N
698	74	libcard	Number of Persons with Library Cards per 1,000 Residents	The rate of persons per 1,000 residents that possess a valid public library system card. This includes all library card types (first card, juvenile, young adult, adult).	2014	128	t	f	2011, 2012	U.S. Bureau of the Census
730	128	trav29_	Percent of Employed Population with Travel Time to Work of 15-29 Minutes	The percentage of commuters that spend between 15 and 29 minutes commuting to work out of all commuters aged 16 and above.	2014	169	t	f	2009-2013	\N
711	126	totemp	Total Number of Employees	The total number of persons employed by businesses (both for-profit and non-profit) within an area at a single time in a year.	2014	144	t	f	2010, 2011, 2012	\N
722	138	voted	Percent Population (Over the age of 18) Who Voted in the General Election	The percentage of persons who voted in the last general election out of all registered voters	2014	161	f	f	2010, 2012	\N
675	61	hsaalg	Percentage of Students Passing H.S.A. Algebra	The percentage of high school students who have successfully passed the H.S.A. exams out of all high school students that took the exam in the school year (considering only the highest score per subject area). In Maryland, all students who entered 9th grade in or after 2005 are required to take and pass the High School Assessments (H.S.A.) in order to graduate, including students in special education, English language learners (ELLs), and students with 504 plans. There are currently three H.S.A. exams: English, Algebra/Data Analysis; and Biology (a H.S.A. in Government has since been discontinued). Students can retake the HSAs as many times as necessary to pass.	2014	90	f	f	2009-2010, 2010-2011, 2012	\N
697	90	mort85_	Mortality by Age (85 and over)	The number of deaths of persons 85 years and older per 10,000 persons within the area in a five year period.	2014	121	f	f	2011, 2012, 2013, 2014	\N
710	98	numbus	Total Number of Businesses	The total number of businesses (both for-profit and non-profit) within an area at a single time in a year.	2014	143	t	f	2010, 2011, 2012	\N
720	93	neiemp	Total number of Employees by Selected Neighborhood Industry (NAICS Sectors)	The number of persons employed by businesses (both for-profit and non-profit) that provide products and services to local residents. The industries included in this indicator are: Retail Trade (NAICS 44-45); Finance and Insurance (NAICS 52); Professional, Scientific, and Technical Services (NAICS 54); Health Care and Social Assistance (NAICS 62); Arts, Entertainment, and Recreation (NAICS 71); Accommodation and Food Services (NAICS 72); and Other Services except Public Administration (NAICS 81). The primary industry reported by each business was used to determine their inclusion. The persons employed by these businesses may not necessarily live in the neighborhood where the business is located.	2014	159	t	f	2010, 2011, 2012	\N
741	21	bkln	Number of Miles of Bike Lanes	Measures the linear miles of designated bike lanes within the roadway system.	2014	192	f	f	2012	\N
768	\N	\N	Number of Persons calling UWCM 211 for Health-Related Services	\N	2014	111	f	t	\N	\N
778	\N	\N	Public Art per 1,000 Residents	The number of works of public art per 1,000 residents. These works include, but are not exclusive to, murals, monuments, sculptures, mosaics, and stained glass. The Baltimore Office of Promotion and the Arts tracks works created through the 1% for Public Art and Baltimore Mural Programs and maintains general inventories of public art and murals.  Additional inventories of public art exist, but not at a comprehensive citywide scale and hence cannot be broken down into cross-neighborhood analyses.	2014	130	f	t	\N	\N
712	118	smlbus	Number of Businesses with Under 50 Employees	The total number of businesses (both for-profit and non-profit) that report having less than 50 persons employed within an area at a single time in a year.	2014	145	t	f	2010, 2011, 2012	\N
724	26	clogged	Rate of Clogged Storm Drain Reports per 1,000 Residents	The rate of service requests for addressing clogged storm drains made through Baltimore�s 311 system per 1,000 residents.  More than one service request may be made for the same issue but is logged as a unique request.	2014	163	f	f	2010, 2011, 2012	U.S. Bureau of the Census
734	27	cmos	Number of Community Managed Open Spaces	The number of community managed open spaces in an area that include community gardens (food-producing or ornamental), Adopt-A-Lots, or some other green space managed by the community.	2014	175	f	f	2011, 2012	\N
745	67	hsenrol	Number of Students Officially Enrolled in 9th - 12th Grade	The number of children who have registered for and attend 9th through 12th grade at a Baltimore City Public School as of September 30th. This count only includes students enrolled in public schools.	2014	197	f	f	2009-2010, 2010-2011, 2012	\N
755	59	histax	Number of Historic Tax Credits per 1,000 Residential Units	The number of residential properties that received the Historic Tax Credit per 1,000 residential properties within an area.  The credit is granted on the increased assessment directly resulting from qualified improvements.  The duration of the credit is for 10 years, and is applicable to properties located in designated areas of significant historical value.	2014	46	t	t	\N	\N
754	\N	\N	Percentage of Residential Tax Lien Sales	\N	2014	40	f	t	\N	\N
764	\N	\N	Average Distance Travelled to School (6th-8th Grade)	\N	2014	96	f	t	\N	\N
774	\N	\N	Causes of Death (analysis of top causes)	\N	2014	125	f	t	\N	\N
784	\N	\N	Percent  of persons in MOED training programs (per 1,000 residents)	\N	2014	155	f	t	\N	\N
794	\N	\N	Aggregate Number of Community Assets	\N	2014	188	f	t	\N	\N
742	99	othrcom	Percent of Population Using Other Means to Commute to Work (Taxi, Motorcycle, Bicycle, Other)	The percentage of commuters that use other means to travel to work out of all commuters aged 16 and above.	2014	194	t	f	2009-2013	\N
705	73	lesshs	Percent  Population (25 years and over) With Less Than a High School Diploma or GED	The percentage of persons that have not completed, graduated, or received a high school diploma or GED. This is a standard indicator used to measure the portion of the population with less than a basic level of skills needed for the workplace. Persons under the age of 25 are not included in this analysis since many of these persons are still attending various levels of schooling.	2014	138	t	f	2009-2013	\N
715	18	biz1_	Percent of Businesses that are 1 year old or less	The percentage of businesses (both for-profit and non-profit) that report their establishment as being one year old or less. The age of the business is determined by the year that the first year they appeared in the InfoUSA database.	2014	150	t	f	2010, 2011, 2012	\N
723	34	dirtyst	Rate of Dirty Streets and Alleys Reports per 1,000 Residents	The rate of service requests for dirty streets and alleys through Baltimore�s 311 system per 1,000 residents. More than one service request may be made for the same issue but is logged as a unique request.	2014	162	f	f	2010, 2011, 2012	U.S. Bureau of the Census
733	132	trees	Percent of Area Covered by Trees	The percent of total land area comprised of tree canopy. The primary sources for this land cover layer were 2004 pan-sharpened 1m Ikonos satellite imagery, a normalized Digital Surface Model (nDSM) derived from 2006 LiDAR data, and LiDAR intensity data resulting from the 2006 acquisition. Other sources of data include the City's planimetric GIS database (building footprints and road casing polygons). The land cover classification was performed using automated object-based image analysis (OBIA) techniques in Definiens Developer/eCognition Server. No accuracy assessment was conducted, but the dataset was thoroughly reviewed at a scale of 1:2000. Over 370 corrections were made to the classification.	2014	172	f	f	2007	\N
732	130	trav45_	Percent of Employed Population with Travel Time to Work of 45 Minutes and Over	The percentage of commuters that spend more than 45 minutes travelling to work out of all commuters aged 16 and above.	2014	171	t	f	2009-2013	\N
744	82	menrol	Number of Students Officially Enrolled in 6th - 8th Grade	The number of children who have registered for and attend 6th through 8th grade at a Baltimore City Public School as of September 30th. This count only includes students enrolled in public schools.	2014	196	f	f	2009-2010, 2010-2011, 2012	\N
737	42	elheat	Percent of Residences Heated by Electricity	The percentage of homes that use electricity for heat and cooking out of all homes.	2014	183	t	f	2009-2013	\N
782	102	prbprl	Percent of Adult Population on Parole/Probation	The percentage of the population age 18 and older that are on parole or probation.	2014	153	f	t	\N	\N
758	\N	\N	Average Fire and EMS Response Time	\N	2014	64	f	t	\N	\N
770	\N	\N	Rate of HIV/AIDS per 1,000 Residents	\N	2014	113	f	t	\N	\N
780	\N	\N	CRA data (residential and commercial)	\N	2014	147	f	t	\N	\N
791	\N	\N	Natural gas utilization	\N	2014	180	f	t	\N	\N
706	66	hsdipl	Percent  Population (25 years and over) With High School Diploma and Some College or Associates Degree	The percentage of persons that have completed, graduated, or received a high school diploma or GED and also has taken some college courses or completed their Associate's degree. This is a standard indicator used to measure the portion of the population with a basic level of skills needed for the workplace. Persons under the age of 25 are not included in this analysis since many of these persons are still attending various levels of schooling.	2014	139	t	f	2009-2013	\N
716	19	biz2_	Percent of Businesses that are 2 years old or less	The percentage of businesses (both for-profit and non-profit) that report their establishment as being two years old or less. The age of the business is determined by the year that the first year they appeared in the business database.	2014	151	t	f	2010, 2011, 2012	\N
726	23	carpool	Percent of Population that Carpool to Work	The percentage of commuters that carpool out of all commuters aged 16 and above.	2014	165	t	f	2009-2013	\N
736	48	heatgas	Percent of Residences Heated by Utility Gas	The percentage of homes that use utility gas for heat and cooking out of all homes.	2014	182	t	f	2009-2013	\N
747	131	treeplnt	Number of Trees of Planted	\N	2014	199	f	f	2013	\N
699	12	artbus	Number of Businesses that are Arts-Related per 1,000 residents	The rate of businesses (both for-profit and non-profit) that are directly related to arts and culture per 1,000 residents.  Arts-related businesses are defined as belonging to industries that allow for the consumption and enjoyment of arts and culture. The following industries are identified by their primary NAICS code: music, literary, and visual arts-related retail/supplies (451140, 451211, 451220); art dealers (453920, 453920); libraries (519120); motion picture and film (521310, 532230); art schools (611610); performing arts (711110, 711120, 711130, 711190); independent artists, writers, and performers (711510); museums (712110); historical sites (712120); and zoos, gardens and nature parks (712130, 712190). The following industries are identified by their primary SIC codes: designers (152106); art publishers (274101), music, literary, and visual arts-related retail/supplies (393101, 519202, 573608, 573609, 593201, 594201, 594205, 594501, 594520, 594601, 599965, 769969); art galleries, dealers, and consultants (599969, 599988, 599989); photography (722121); calligraphers (733607); embroidery (738942); theatres (783201, 792207); theatrical support (792211, 792212); musical and live entertainment (792903, 792905, 792906, 792908, 792917, 792918, 792927); parks (799951); art and music instruction (804958, 829915, 829919); libraries (823111); museums (841201); arts organizations (841202); zoos (842201); writers (899903); visual artists (899907, 899912); art restoring (899908); and music arrangers and composers (899921).	2014	131	t	f	2010, 2011, 2012	U.S. Bureau of the Census
748	\N	\N	Percent Subsidized Housing	\N	2014	200	f	f	2013	\N
757	\N	\N	Rate of Fire and EMS Calls for Service per 1,000 Residents	\N	2014	63	f	t	\N	\N
771	\N	\N	Causes of Death (analysis of top causes)	\N	2014	122	f	t	\N	\N
792	\N	\N	Energy Use	\N	2014	181	f	t	\N	\N
799	\N	\N	\N	\N	2014	\N	f	t	\N	\N
653	39	eattend	Number of Students Ever Attended 1st - 5th Grade	The number of children who have registered for and attend 1st through 5th grade at a Baltimore City Public School at any point during the school year.	2014	66	f	f	2009-2010, 2010-2011, 2012	\N
684	72	leadtest	Number of Children (aged 0-6) Tested for Elevated Blood Lead Levels	This indicator reflects the total number of children aged 0-6 who are tested for the presence of blood lead in a calendar year.	2014	103	f	f	2010, 2011, 2012	\N
695	88	mort64_	Mortality by Age (45-64 years old)	The number of deaths of persons between the ages of 45 and 64 per 10,000 persons within the area in a five year period.	2014	119	f	f	2011, 2012, 2013, 2014	\N
709	31	crehab	Percent of Commercial Properties with Rehab Permits Above $5,000	The percentage of properties that are investing within their current establishment and not the level of their investment. Permits for work below $5,000 are considered to be minor and not included in this indicator. A single establishment can apply for and receive multiple permits.	2014	142	f	f	2010, 2011, 2012	Maryland Property View
655	65	hsattend	Number of Students Ever Attended 9th - 12th Grade	The number of children who have registered for and attend 9th through 12th grade at a Baltimore City Public School at any point in the school year.	2014	68	f	f	2009-2010, 2010-2011, 2012	\N
717	20	biz4_	Percent of Businesses that are 4 years old or less	The percentage of businesses (both for-profit and non-profit) that report their establishment as being four years old or less. The age of the business is determined by the year that the first year they appeared in the business database. A business that has been in operation more than four years has a greater likelihood of remaining open for a longer period of time.	2014	152	t	f	2010, 2011, 2012	\N
727	105	pubtran	Percent of Population that Uses Public Transportation to Get to Work	The percentage of commuters that use public transit out of all commuters aged 16 and above.	2014	166	t	f	2009-2013	\N
749	\N	ceb	Rate of Businesses in the Creative Economy per 1,000 residents	The rate of businesses (both for-profit and non-profit) that are in the creative economy per 1,000 residents. The creative economy is defined as industries that use and support artistic and cultural skillsets to attract and generate capital, knowledge, and information. Arts-based businesses are included in the creative economy. In addition to the industries included in the rate of arts-based businesses indictor, the following industries are identified by their primary NAICS code: Textiles (313220); Commercial Printing (323111, 323113); Book Printers and Publishers (323117, 511130); Print Media (451212, 511110, 511120, 511199, 519110); Motion Picture & Video Production (512110); Music Publishers (512230); Sound Recording (512240); Radio (515112); Architecture (541310, 541320); Interior Design (541410); Graphic Design (541430); Advertising (541810, 541890); and Photography (541921, 541922). In addition to the industries included in the rate of arts-based businesses indictor, the following industries are identified by their primary SIC code: Print Media (271101, 271102, 271198, 272101, 272102, 272104, 273101, 273198, 596302, 599401); Publishers (273298, 274104, 274105, 874205); Printers (275202, 275202, 275902, 275998); Bookbinders (278902); Radio (483201); Television (483301, 484101, 792205, 824911); Textiles (513122, 594904); Advertising (519917, 731101, 731115, 731305, 731999); Fashion Designers (569901, 594408); Photography (722101, 722113, 722120, 733501, 738401); Graphic Design (733603); Commercial Artists (733604); Website Design (737311); General Media (738301); Interior Design (738902); Restoration (764112); Landscape Design (781030); Motion Picture and Video Support (781205, 781211, 781901); Architecture (871202, 871207, 871209, 874892); and Business Writers (899902).	2014	201	f	f	2012, 2013, 2014	\N
759	\N	\N	Number of Children Enrolled in Head Start Programs	\N	2014	65	f	t	\N	\N
765	\N	\N	Average Distance Travelled to School (9th-12th Grade)	\N	2014	97	f	t	\N	\N
775	\N	\N	Causes of Death (analysis of top causes)	\N	2014	126	f	t	\N	\N
786	\N	\N	Air Quality Risk	\N	2014	173	f	t	\N	\N
796	\N	\N	Number of Bike Racks per 1,000 Residents	\N	2014	190	f	t	\N	\N
728	139	walked	Percent of Population that Walks to Work	The percentage of commuters that walk to work out of all commuters aged 16 and above.	2014	167	t	f	2009-2013	\N
738	97	novhcl	Percent of Households with No Vehicles Available	The percentage of households that do not have a personal vehicle available for use out of all households in an area.	2014	184	t	f	2009-2013	\N
718	94	neiind	Number of Businesses by Selected Neighborhood Industry (NAICS Sectors)	The number of businesses (both for-profit and non-profit) that provide products and services to local residents. The industries included in this indicator are: Retail Trade (NAICS 44-45); Finance and Insurance (NAICS 52); Professional, Scientific, and Technical Services (NAICS 54); Health Care and Social Assistance (NAICS 62); Arts, Entertainment, and Recreation (NAICS 71); Accommodation and Food Services (NAICS 72); and Other Services except Public Administration (NAICS 81). The primary industry reported by each business was used to determine their inclusion.	2014	157	t	f	2010, 2011, 2012	\N
750	\N	cee	Number of Employees in the Creative Economy	The number of persons employed in the creative economy (both for-profit and non-profit). This number does not count those persons who identify themselves as being artists and does not count sole proprietorships or persons who work part-time in the arts. The same industries used to calculate the rate businesses in the creative economy are used to calculate total employment in the creative economy.	2014	202	f	f	2012, 2013, 2014	\N
761	\N	\N	Percentage of Students Enrolled in After School Programs	\N	2014	79	f	t	\N	\N
767	\N	\N	Fetal Mortality Rate	\N	2014	108	f	t	\N	\N
777	\N	\N	Number of Event Permits Requested per 1,000 Residents	The number of event permits requested per 1,000 residents. Events include, but are not limited to, festivals, block parties, races, and parades. In the event of a large event, the central point is used to calculate the location of the request.	2014	129	f	t	\N	\N
788	\N	\N	Number of Downspout Disconnections per 1,000 Residences	\N	2014	177	f	t	\N	\N
797	\N	\N	Road Quality	\N	2014	191	f	t	\N	\N
729	127	trav14_	Percent of Employed Population with Travel Time to Work of 0-14 Minutes	The percentage of commuters that spend less than 15 minutes commuting to work out of all commuters aged 16 and above.	2014	168	t	f	2009-2013	\N
739	141	weather	Percent of Homes Weatherized	The percent of residential properties that were eligible for and received weatherization assistance such as air sealing or furnace replacements. The Weatherization Assistance Program helps eligible low-income households lower their energy costs by increasing the energy efficiency of their homes, while ensuring their health and safety.	2014	186	f	f	2010, 2011, 2012	Maryland Property View
719	92	neibus	Neighborhood Businesses per 1,000 residents (NAICS Sectors)	The number of businesses (both for-profit and non-profit) that provide products and services to local residents per 1,000. The industries included in this indicator are: Retail Trade (NAICS 44-45); Finance and Insurance (NAICS 52); Professional, Scientific, and Technical Services (NAICS 54); Health Care and Social Assistance (NAICS 62); Arts, Entertainment, and Recreation (NAICS 71); Accommodation and Food Services (NAICS 72); and Other Services except Public Administration (NAICS 81). The primary industry reported by each business was used to deter-mine their inclusion.	2014	158	t	f	2010, 2011, 2012	\N
753	\N	gini	Inequality Index (NOT YET DECIDED)	\N	2014	26	f	t	2009-2013	\N
763	\N	\N	Percentage of Students Attending Zoned School	\N	2014	95	f	t	\N	\N
772	\N	\N	Causes of Death (analysis of top causes)	\N	2014	123	f	t	\N	\N
781	\N	\N	CRA data (residential and commercial)	\N	2014	148	f	t	\N	\N
785	\N	\N	Percent of Population with Broadband Internet Access	\N	2014	156	f	t	\N	\N
795	\N	\N	Transit data	\N	2014	189	f	t	\N	\N
\.


--
-- Name: meta_pkey; Type: CONSTRAINT; Schema: vital_signs; Owner: jfi; Tablespace: 
--

ALTER TABLE ONLY meta
    ADD CONSTRAINT meta_pkey PRIMARY KEY (id);


--
-- Name: vital_signs_meta_id_unique; Type: CONSTRAINT; Schema: vital_signs; Owner: jfi; Tablespace: 
--

ALTER TABLE ONLY meta
    ADD CONSTRAINT vital_signs_meta_id_unique UNIQUE (id);


--
-- Name: vital_signs_meta_data_year_index; Type: INDEX; Schema: vital_signs; Owner: jfi; Tablespace: 
--

CREATE INDEX vital_signs_meta_data_year_index ON meta USING btree (data_year);


--
-- PostgreSQL database dump complete
--

