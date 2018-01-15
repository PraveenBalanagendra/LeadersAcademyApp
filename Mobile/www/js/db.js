/* **************************************************************
 * db.js
 * **************************************************************/
var myDB; 
var language = 'english';

function createDatabase()
{
	//alert("creating database");

	// Create table
	myDB.transaction(function(transaction) {
		transaction.executeSql('CREATE TABLE IF NOT EXISTS content (description text, english text, kannada text)', [], null, null);
	});

	myDB.transaction(function(transaction) {
		transaction.executeSql('CREATE TABLE IF NOT EXISTS setting (description text, value text)', [], null, null);
	});
	
	myDB.transaction(function(transaction) {
		transaction.executeSql('CREATE TABLE IF NOT EXISTS user (firstName text, lastName text, role text)', [], null, null);
	});

	myDB.transaction(function(transaction) {
		transaction.executeSql('CREATE TABLE IF NOT EXISTS notification (id int, title text, message text)', [], null, null);
	});

	myDB.transaction(function(transaction) {
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['About' + 'AcademyHeader','Leaders Academy','ಲೀಡರ್ಸ್ ಅಕಾಡೆಮಿ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['About' + 'BalaSirHeader','Balakrishnan V','ಬಾಲಕೃಷ್ಣ ವಿ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['About' + 'Academy','We began our journey on 18th DEC 2003 to make a difference to the people who wants to reach their pinnacle of their potential by giving confidence to their heart and clarity to their mind. Holistic development on the aspects of life (Personal, Family, Social, Intellectual, Financial, Spiritual) happily, peacefully, legally, ethically and healthily. Leaders Academy programs are specially designed for life long results. It is an inspirational, interactive, experiential life transforming development program to explore the real YOU in you','ಜನರಿಗೆ, ಅವರ ಮನಸ್ಸಿಗೆ ಸ್ಪಷ್ಟತೆ ಹಾಗು ಹೃದಯಕ್ಕೆ ವಿಶ್ವಾಸ ನೀಡುವ ಮೂಲಕ ಅವರ ಸಾಮರ್ಥ್ಯದ ಪರಾಕಾಷ್ಠೆಯನ್ನು ತಲುಪಲು; ನಾವು 18 ನೇ DEC 2003 ರಂದು ನಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿದ್ದೇವೆ. ಸಂತೋಷವಾಗಿ, ಶಾಂತಿಯುತವಾಗಿ, ಕಾನೂನುಬದ್ಧವಾಗಿ, ನೈತಿಕವಾಗಿ ಮತ್ತು ಆರೋಗ್ಯಕರವಾಗಿ ಜೀವನದ ವೈಯಕ್ತಿಕ ಅಂಶಗಳು (ವೈಯಕ್ತಿಕ, ಕುಟುಂಬ, ಸಾಮಾಜಿಕ, ಬೌದ್ಧಿಕ, ಹಣಕಾಸು, ಆಧ್ಯಾತ್ಮಿಕ) ಮೇಲೆ ಸಮಗ್ರ ಬೆಳವಣಿಗೆ ನೀಡುವುದೇ ಅಕಾಡೆಮಿಯ ಉದ್ದೇಶ. ಲೀಡರ್ಸ್ ಅಕಾಡೆಮಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ವಿಶೇಷವಾಗಿ ದೀರ್ಘಾವಧಿ ಫಲಿತಾಂಶಗಳಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ಇದು ನಿಮ್ಮನ್ನು ಅನ್ವೇಷಿಸಲು; ಒಂದು ಸ್ಪೂರ್ತಿದಾಯಕ, ಸಂವಾದಾತ್ಮಕ, ಅನುಭವದ ಜೀವನ ಪರಿವರ್ತನೆ ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮವಾಗಿದೆ.'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['About' + 'BalaSir','Chairman of Inspire India Properties Ltd., Director of  Inspire India Financial Solutions Pvt Ltd., President of Leaders Education Trust. Conducts dynamic programs on 360° transformation called "Leaders" in more than 40 cities all across country & aboard from 1998. Popularly known as "HAAPPY MAN".','ಇನ್ಸ್ ಪೈರ್ ಇಂಡಿಯ ಪ್ರಾಪರ್ಟೀಸ್ ಲಿಮಿಟೆಡ್ ನ ಅಧ್ಯಕ್ಷ, ಇನ್ಸ್ ಪೈರ್ ಇಂಡಿಯ ಫಿನಾಂಶಿಯಲ್ ಸಲ್ಯೂಶನ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ನಿರ್ದೇಶಕ ಮತ್ತು ಲೀಡರ್ಸ್ ಎಡುಕೇಷನ್ ಟ್ರಸ್ಟ್ ಅಧ್ಯಕ್ಷರು. 360°ಪರಿವರ್ತನೆ ಕೊಡುವಂತಹ, ಜನಪ್ರಿಯವಾದಂತಹ ಕಾರ್ಯಕ್ರಮ, 40ಕ್ಕೂ ಹೆಚ್ಚು ನಗರಗಳಲ್ಲಿ , ಹೊರ ದೇಶದಲ್ಲಿ 1998 ರಿಂದ "ಲೀಡರ್ಸ್" ಕಾರ್ಯಕ್ರಮವನ್ನು ನಡೆಸುತ್ತಿರುವವರು.  ಜನಪ್ರಿಯವಾಗಿ "ಹ್ಯಾಪಿ ಮ್ಯಾನ್" ಎಂದು ಕರೆಸಿಕೊಳ್ಳುತ್ತಾರೆ.'], null, null);
	});
	
	myDB.transaction(function(transaction) {
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'WorkshopHeader','Workshop','ವರ್ಕ್ ಶಾಪ್'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'GLTHeader','GLT','ಜಿಎಲ್ಟಿ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'CTMHeader','CTM','ಸಿಟಿಎಮ್'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'NirvanaHeader','Nirvana','ನಿರ್ವಾಣ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'KurukshetraHeader','Kurukshetra','ಕುರುಕ್ಷೇತ್ರ'], null, null);

		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'WorkshopDetail','Leaders Academy programs are structured in the way that helps in holistic development and for successful growth in all 6 pillars of life: Personal, Family, Social, Intellectual, Financial, Spiritual. Workshop, GLT, CTM, Kuruskshetra, Nirvana are the few different programs.','ವೈಯಕ್ತಿಕ, ಕುಟುಂಬ, ಸಾಮಾಜಿಕ, ಬೌದ್ಧಿಕ, ಹಣಕಾಸು, ಆಧ್ಯಾತ್ಮಿಕತೆ: ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಯಲ್ಲಿ ಮತ್ತು ಎಲ್ಲಾ 6 ಸ್ತಂಭಗಳಲ್ಲಿ ಯಶಸ್ವಿ ಬೆಳವಣಿಗೆಗೆ ಸಹಾಯ ಮಾಡುವ ರೀತಿಯಲ್ಲಿ  ಲೀಡರ್ಸ ಅಕಾಡೆಮಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ರಚಿಸಲಾಗಿದೆ. ವರ್ಕ್ ಶಾಪ್, ಜಿಎಲ್ಟಿ, ಸಿ.ಟಿ.ಎಂ, ಕುರುಕ್ಷೇತ್ರ, ನಿರ್ವಾಣ ಇವುಗಳು ಕೆಲವು ವಿಭಿನ್ನ ಕಾರ್ಯಕ್ರಮಗಳಾಗಿವೆ.'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'Workshop','4 days (2 weekend) program to set the transformation foundation and realize the hidden potential within YOU. Some of the transformational areas are: Everytime on Time - Value Time, Whatever you visualize will materialise - Importance of Goal setting, Healthy mind in a Healthy body - Peace, Set your mind right and get your life right - Mind management, Face it; it goes - avoid it; it grows - Courage, Choice and Consequence - Law of Karma, Decision making skills, The loudest way to tell the world shout up is to produce result - Self Confidence, Fundamentals of fund management - Money magic, A goal of all goals - Happily Dissatisfied','4 ದಿನಗಳ (2 ವಾರಾಂತ್ಯ) ಕಾರ್ಯಕ್ರಮವು ಪರಿವರ್ತನೆಯ ಅಡಿಪಾಯವನ್ನು ಸ್ಥಾಪಿಸಲು ಮತ್ತು ನಿಮ್ಮೊಳಗಿನ ಸಾಮರ್ಥ್ಯವನ್ನು ಕಂಡುಕೊಳ್ಳಲು ಸಹಾಯಕವಾಗಿದೆಯೆ. ಪರಿವರ್ತನೆಯ ಕೆಲವು ಪ್ರದೇಶಗಳು:  ಎಲ್ಲಾ ಸಮಯದಲ್ಲೂ ಸರಿಯಾದ ಸಮಯಕ್ಕೆ - ಸಮಯದ ಸಧ್ಬಳಕೆ, ನಾವು ಏನೆಲ್ಲಾ ಕಲ್ಪನೆ ಮಾಡುತ್ತೇವೋ  ಅದೆಲ್ಲಾ ನನಸಾಗುವುದು  - ಗುರಿ ನಿರ್ಧಾರ, ಮಾನಸಿಕ ಆರೋಗ್ಯವೇ ಧೈಹಿಕ ಆರೋಗ್ಯ - ಮನಶಾಂತಿ, ಮನಸ್ಸನ್ನು ಬಲಪಡಿಸಿಕೊಳ್ಳಿ ಜೀವನವನ್ನು ಸರಿಪಡಿಸಿಕೊಳ್ಳಿ - ಮನಸ್ಸಿನ ನಿರ್ವಹಣೆ, ಎದುರಿಸಿದರೆ ಹೋಗುತ್ತದೆ ತಪ್ಪಿಸಿದರೆ ಬೆಳೆಯುತ್ತದೆ - ಧೈರ್ಯ, ಆಯ್ಕೆ ಮತ್ತು ಪರಿಣಾಮ - ಪ್ರಕೃತಿಯ ನಿಯಮ, ಜೀವನದ ತಿರುವು - ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವ ಕಲೆ, ಜನ ನಿಮ್ಮ ಬಗ್ಗೆ ಏನು ಅಂದುಕೊಳ್ಳುತ್ತಾರೋ ಅದಕ್ಕಿಂತ ನೀವು ನಿಮ್ಮ ಬಗ್ಗೆ ಏನು ಅಂದುಕೊಳ್ಳುತ್ತೀರೋ ಅದು ಮುಖ್ಯ - ಆತ್ಮ ವಿಶ್ವಾಸ, ಹಣವೇ ಎಲ್ಲಾ ಅಲ್ಲ ಹಣ ಏನು ಅಲ್ಲದೇನೂ ಅಲ್ಲ - ಹಣದ ಅರಿವು, ಎಲ್ಲಾ ಗುರಿಗಳ ಮುಖ್ಯ ಗುರಿ - ಸಂತೋಷವಾಗಿ ಅತೃಪ್ತಿ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'GLT','12 class program to convert the information to implementation. The knowledge gained during the workshop is practically implemented during the GLT sessions and helps in complete transformation towards the success. Here you will be given projects that shapes your communication skills, stage behavior, offering skills, ideas presentation, memory techniques','12 ಸೆಶನ್ ಪ್ರೋಗ್ರಾಂ ಮಾಹಿತಿಯನ್ನು ಅನುಷ್ಠಾನಕ್ಕೆ ಪರಿವರ್ತಿಸಲು. ವರ್ಕ್-ಶಾಪ್ ನಲ್ಲಿ ಪಡೆದ ಜ್ಞಾನವು ಜಿಎಲ್ಟಿ ಅಧಿವೇಶನಗಳಲ್ಲಿ ಪ್ರಾಯೋಗಿಕವಾಗಿ ಕಾರ್ಯಗತಗೊಳಿಸಲ್ಪಡುತ್ತದೆ ಮತ್ತು ಯಶಸ್ಸನ್ನು ಸಂಪೂರ್ಣ ರೂಪಾಂತರಕ್ಕೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ. ನಿಮ್ಮ ಸಂವಹನ ಕೌಶಲ್ಯ, ವೇದಿಕೆಯ ವರ್ತನೆಯನ್ನು, ಆಫರಿಂಗ್ ಕೌಶಲ್ಯಗಳನ್ನು, ವಿಚಾರಗಳ ಪ್ರಸ್ತುತಿ, ಮೆಮೊರಿ ತಂತ್ರಗಳು ಇತ್ಯಾದಿಗಳನ್ನು ರೂಪಿಸುವ ಯೋಜನೆಗಳನ್ನು ಇಲ್ಲಿ ನಿಮಗೆ ನೀಡಲಾಗುವುದು.'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'CTM','Completing GLT program is prerequisite for this program. You become the Core Team Member of Leaders Academy. Being in the postie environment with the like and right minded people - Sangam Sharanam Gacchami; helps you to attaing your goals faster','ಸಜಿಎಲ್ಟಿ ಕಾರ್ಯಕ್ರಮವನ್ನು ಪೂರ್ಣಗೊಳಿಸುವುದು ಿಟಿಎಮ್ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಪೂರ್ವಾಪೇಕ್ಷಿತವಾಗಿದೆ. ನೀವು ಲೀಡರ್ಸ್ ಅಕ್ಯಾಡೆಮಿಯ ಕೋರ್ ಟೀಮ್ ಸದಸ್ಯ ಆಗುತ್ತೀರಿ. ಧನಾತ್ಮಕ ಪರಿಸರದಲ್ಲಿ ಸೂಕ್ತ ಮನಸ್ಸಿನ ಜನರೊಂದಿಗೆ ಇರುವುದರಿಂದ - ಸಂಘ ಶರಣಂ ಗಚಾಮಿ; ನಿಮ್ಮ ಗುರಿಗಳನ್ನು ಬಹು ಬೇಗ ಸಾಧಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'Nirvana','This is a 4 day program entirely on the Spiritual pillar of life. Completing workshop program is prerequisite for this program. Connect with yourself and make your subconscious stronger, Understand the purpose of your life through thought provoking activities. Experience the power of silence. Experience the spiritual energy.','4 ದಿನ ಕಾರ್ಯಕ್ರಮವು ಸಂಪೂರ್ಣವಾಗಿ ಆಧ್ಯಾತ್ಮಿಕ ಸ್ತಂಭದ ಮೇಲೆ ಸಮರ್ಪಿಸಲಾಗಿದೆ. ವರ್ಕ್-ಶಾಪ್ ಕಾರ್ಯಕ್ರಮವನ್ನು ಪೂರ್ಣಗೊಳಿಸುವುದು ಈ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಪೂರ್ವಾಪೇಕ್ಷಿತವಾಗಿದೆ. ನಿಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಉಪಪ್ರಜ್ಞೆ ಬಲಪಡಿಸಿಕೊಳ್ಳಿ, ಚಿಂತನೆಯ ಪ್ರಚೋದಿಸುವ ಚಟುವಟಿಕೆಗಳ ಮೂಲಕ ನಿಮ್ಮ ಜೀವನದ ಉದ್ದೇಶವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ. ಮೌನ ಶಕ್ತಿಯನ್ನು ಅನುಭವಿಸಿ. ಆಧ್ಯಾತ್ಮಿಕ ಶಕ್ತಿಯನ್ನು ಅನುಭವಿಸಿ.'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'Kurukshetra','What YOU think is what YOU become. What YOU give is what YOU get. Kurukshetra gives the clarity on the choice of Good in different aspects of life: Relationship, Confidence, Enlightenment, Parenting, Success, Devotion etc','ನೀವು ಏನು ಯೋಚಿಸುತ್ತೀರೋ ಅದೇ ನೀವು ಆಗುವಿರಿ. ನೀವು ಏನು ಕೊಡುತ್ತೀರಿ ಅದೇ ನಿಮಗೆ ಸಿಗುತ್ತದೆ.  ಕುರುಕ್ಷೇತ್ರವು ಜೀವನದ ವಿಭಿನ್ನ ಅಂಶಗಳಾದ : ಸಂಬಂಧ, ವಿಶ್ವಾಸ, ಜ್ಞಾನೋದಯ, ಪೋಷಕತ್ವ, ಯಶಸ್ಸು, ಭಕ್ತಿ ಇತ್ಯಾದಿಗಳ ಒಳ್ಳೆಯ ಆಯ್ಕೆಗಳ ಬಗ್ಗೆ ಸ್ಪಷ್ಟತೆಯನ್ನು ನೀಡುತ್ತದೆ'], null, null);

		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Contact' + 'AddressHeader','Address','ವಿಳಾಸ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Contact' + 'PhoneHeader','Phone','ಪೋನ್'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Contact' + 'EmailHeader','Email','ಇಮೇಲ್'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Contact' + 'SupportEmailHeader','Support Email','ಸಪೋರ್ಟ್ ಇಮೇಲ್'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Contact' + 'WebsiteHeader','Website','ವೆಬ್ ಸೈಟ್'], null, null);

		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['FAQ' + '1Header','Is there any joining fee?','ಅಕಾಡೆಮಿ ಸೇರುವುದಕ್ಕೆ ಹಣ ಇದೆಯೇ?'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['FAQ' + '2Header','How many people have undergone training?','ಎಷ್ಟು ಜನ ಅಕಾಡೆಮಿ ಸೇರಿದ್ದಾರೆ?'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['FAQ' + '3Header','What if I don’t like the programme?','ನನಗೆ ಶಿಭಿರ ಇಷ್ಟವಾಗದಿದ್ದರೆ? '], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['FAQ' + '1','Yes. Please contact us for the current rates.','ಹೌದು. ದಯವಿಟ್ಟು ಪ್ರಸ್ತುತ ದರಗಳಿಗೆ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['FAQ' + '2','30,000+ participants and growing','ಭಾಗವಹಿಸಿದವರ 30,000 ಮತ್ತು ಬೆಳೆಯುತ್ತಿರುವ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['FAQ' + '3','At the end of the programme, if you still don’t like the programme, the amount is completely refunded with no questions asked.','ಕಾರ್ಯಕ್ರಮದ ಕೊನೆಯಲ್ಲಿ, ನಿಮಗೆ ಇನ್ನೂ ಪ್ರೋಗ್ರಾಂ ಇಷ್ಟವಾಗದಿದ್ದರೆ, ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿಲ್ಲದೆ ಸಂಪೂರ್ಣವಾಗಿ ಹಣ ಮರು ಆಗಲಿದೆ '], null, null);

		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Settings' + 'Notification','Enable/Disable', 'ಸಕ್ರಿಯಗೊಳಿಸಿ / ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Settings' + 'WhyPhone','We ask phone number for you to associate with the Academy', 'ಅಕಾಡೆಮಿಯೊಂದಿಗೆ ಸಂಯೋಜಿಸಲು ನಾವು ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ಕೇಳುತ್ತೇವೆ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Settings' + 'Name','Your Name', 'ನಿಮ್ಮ ಹೆಸರು'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Settings' + 'Phone','Your Phone number', 'ನಿಮ್ಮ ಫೋನ್ ನಂಬರ್'], null, null);
		
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'KHeader','Kurukshetra','ಕುರುಕ್ಷೇತ್ರ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'KContent','Kurukshetra Series is about the topic and provides an in depth knowledge and clarity. The topics ranges from Family, Self Confidence, Entertainment to Enlightenment, Parenting etc.','ಕುರುಕ್ಷೇತ್ರ ಸರಣಿಯು ಯಾವುದಾದರು ವಿಷಯದ ಬಗ್ಗೆ (ಕುಟುಂಬ, ಆತ್ಮ ವಿಶ್ವಾಸ, ಎಂಟರ್ಟೈನ್ಮೆಂಟ್ಗೆ ಜ್ಞಾನೋದಯ, ಪೇರೆಂಟಿಂಗ್ ಇತ್ಯಾದಿಗಳು) ಆಳ ಜ್ಞಾನ ಮತ್ತು ಸ್ಪಷ್ಟತೆ ನೀಡುತ್ತದೆ..'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'KLink','Tap here for K11 – Self Confidence','ಕೆ11 - ಆತ್ಮವಿಶ್ವಾಸಕ್ಕಾಗಿ ಇಲ್ಲಿ ಟ್ಯಾಪ್ ಮಾಡಿ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'SpeechHeader','Speech Contest','ಭಾಷಣ ಸ್ಪರ್ಧೆ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'SpeechContent','Speech Contest allows the member of Leaders Academy to contest for the best speech of the year.','ಭಾಷಣ ಸ್ಪರ್ಧೆಯು ಲೀಡರ್ಸ್ ಅಕಾಡೆಮಿಯ ಸದಸ್ಯರಿಗೆ ವರ್ಷದ ಅತ್ಯುತ್ತಮ ಭಾಷಣಕ್ಕಾಗಿ ಸ್ಪರ್ಧಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'SpeechLink1','Tap here for Best Top 20 Speech – 2015','ಅತ್ಯುತ್ತಮ ಟಾಪ್ 20 ಸ್ಪೀಚ್ಗಾಗಿ ಇಲ್ಲಿ ಟ್ಯಾಪ್ ಮಾಡಿ - 2015'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'SpeechLink2','Tap here for Best Top 20 Speech – 2017','ಅತ್ಯುತ್ತಮ ಟಾಪ್ 20 ಸ್ಪೀಚ್ಗಾಗಿ ಇಲ್ಲಿ ಟ್ಯಾಪ್ ಮಾಡಿ - 2017'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'HealthHeader','Health','ಆರೋಗ್ಯ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'HealthContent','My health my responsibility','ನನ್ನ ಆರೋಗ್ಯ ನನ್ನ ಜವಾಬ್ದಾರಿ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'HealthLink','Tap here for Episodes','ಎಪಿಸೋಡ್ಗಳಿಗಾಗಿ ಇಲ್ಲಿ ಟ್ಯಾಪ್ ಮಾಡಿ'], null, null);
    });
	
	// Create Navigation Contents
	myDB.transaction(function(transaction) {
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Navigation' + 'About','About','ಬಗ್ಗೆ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Navigation' + 'Programs','Programs','ಪ್ರೋಗ್ರಾಮ್ಸ್'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Navigation' + 'Contact','Contact','ಸಂಪರ್ಕಿಸಿ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Navigation' + 'Events','Events','ಕಾರ್ಯಕ್ರಮಗಳು'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Navigation' + 'Settings','Settings','ಸೆಟ್ಟಿಂಗ್ಗಳು'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Navigation' + 'FAQ','FAQ','ಪ್ರಶ್ಣೋತ್ತರ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Navigation' + 'Login','Login','ಲಾಗಿನ್'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Navigation' + 'Logout','Logout','ಲಾಗೌಟ್'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Navigation' + 'Gallery','Gallery','ಗ್ಯಾಲರಿ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Navigation' + 'Notification','Notification','ಸೂಚನೆ'], null, null);
		
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Notification' + 'NoNotification','No Notification','ಯಾವುದೇ ಸೂಚನೆಗಳೂ ಇಲ್ಲ '], null, null);
		
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Events' + 'NoEvents','No Upcoming Events','ಯಾವುದೇ ಕಾರ್ಯಕ್ರಮಗಳು ಇಲ್ಲ'], null, null);
		
		//transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Events' + 'ChequeHeader','Cheque or DD','ಚೆಕ್ಕು ಅಥವ ಡಿಡಿ'], null, null);
		//transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Events' + 'ChequeDetails','In the name of "Leaders Academy for Personal Success Pvt Ltd". Crossed Cheque. Behind the cheque kindly mention your name & mobile no. Courier to: Leaders Academy, #347, 1st D Cross, 6th Block, 2nd Phase, BSK 3rd stage, Bengaluru - 560085. Mobile: 9980977955 / 9342991069.','In the name of "Leaders Academy for Personal Success Pvt Ltd". Crossed Cheque. Behind the cheque kindly mention your name & mobile no. Courier to: Leaders Academy, #347, 1st D Cross, 6th Block, 2nd Phase, BSK 3rd stage, Bengaluru - 560085. Mobile: 9980977955 / 9342991069.'], null, null);
	});
	
	myDB.transaction(function(transaction) {
		transaction.executeSql('INSERT INTO setting (description, value) VALUES (?,?)', ['language','english'], function(txn, message){
			// Cache screen elements
			getLanguage();
		}, null);
		transaction.executeSql('INSERT INTO setting (description, value) VALUES (?,?)', ['notificationSetting', 'yes'], null, null);
		transaction.executeSql('INSERT INTO setting (description, value) VALUES (?,?)', ['phonenumber', '0000000000'], null, null);
	});
	
	// myDB.transaction(function(transaction) {
	 // transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', [screen + 'ContactUs','Contact','ಸಂಪರ್ಕಿಸಿ'], null, null);
	// });
	// myDB.transaction(function(transaction) {
	 // transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', [screen + 'FAQ','FAQ','ಪ್ರಶ್ನೆ'], null, null);
	// });
	// myDB.transaction(function(transaction) {
	 // transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', [screen + 'Magazine','Magazine','ಪತ್ರಿಕೆ'], null, null);
	// });
	
}

function getLanguage()
{
	//alert("caching");
	myDB.transaction(function(transaction) {
		transaction.executeSql('SELECT value FROM setting where description = ?', ['language'], 
			function (tx, results) {
				language = results.rows.item(0).value;
				//alert('language: ' + results.rows.item(0).value);
				cacheScreenContent();
			}, 
			function(err){
				//alert('error');
				language = 'english';
				cacheScreenContent();
			}
		 );
	});
}

function cacheScreenContent()
{	
	myDB.transaction(function(transaction) {
		//alert("content cache: SELECT description, " + language + " as screenContent FROM content where description like '" + screen + "%'");
		transaction.executeSql("SELECT description, " + language + " as screenContent FROM content", [], 
			function (tx, results) {
			    var len = results.rows.length, i;
				for (i = 0; i < len; i++){
					//alert("Caching: Element: " + results.rows.item(i).description + " Content: " + results.rows.item(i).screenContent);
					localStorage.setItem(results.rows.item(i).description, results.rows.item(i).screenContent);
				}
				populatePage();
			}, null);
	});
	// myDB.transaction(function(transaction) {
		// transaction.executeSql('SELECT kannada FROM content where description = ?', [screen+'FAQ'], function (tx, results) {
			// localStorage.setItem(screen+'FAQ', results.rows.item(0).kannada);
		 // }, null);
	// });
	// myDB.transaction(function(transaction) {
		// transaction.executeSql('SELECT kannada FROM content where description = ?', [screen+'Magazine'], function (tx, results) {
			// localStorage.setItem(screen+'Magazine', results.rows.item(0).kannada);
		 // }, null);
	// });
	
	// myDB.transaction(function(transaction) {
		// transaction.executeSql('SELECT kannada FROM content where description = ?', [screen+'ContactUs'], function (tx, results) {
			// localStorage.setItem(screen+'ContactUs', results.rows.item(0).kannada);
			// populatePage();
		 // }, null);
}