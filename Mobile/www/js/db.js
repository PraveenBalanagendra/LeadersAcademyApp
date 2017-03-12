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
		transaction.executeSql('CREATE TABLE IF NOT EXISTS user (firstName, lastName, role)', [], null, null);
	});

	myDB.transaction(function(transaction) {
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['About' + 'AcademyHeader','Leaders Academy','ಲಿೀಡರ್ ಅಕಾಡೆಮಿ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['About' + 'BalaSirHeader','Balakrishnan V','ಬಾಲಕೃಷ್ಣ ವಿ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['About' + 'Academy','We began our journey on 18th DEC 2003 to make a difference to the people who wants to reach their pinnacle of their potential by giving confidence to their heart and clarity to their mind. Holistic development on the aspects of life (Personal, Family, Social, Intellectual, Financial, Spiritual) happily, peacefully, legally, ethically and healthily. Leaders Academy programs are specially designed for life long results. It is an inspirational, interactive, experiential life transforming development program to explore the real YOU in you','ನಾವು ಅವರ ಮನಸ್ಸಿಗೆ ತಮ್ಮ ಹೃದಯ ಮತ್ತು ಸ್ಪಷ್ಟತೆ ವಿಶ್ವಾಸ ನೀಡುವ ಮೂಲಕ ತಮ್ಮ ಸಾಮರ್ಥ್ಯವನ್ನು ತಮ್ಮ ಪರಾಕಾಷ್ಠೆಯನ್ನು ತಲುಪಲು ಬಯಸಿದೆ ಜನರಿಗೆ ಒಂದು ವ್ಯತ್ಯಾಸ ಮಾಡಲು 18 ಡಿಸೆಂಬರ್ 2003 ರಂದು ನಮ್ಮ ಪ್ರಯಾಣ ಆರಂಭಿಸಿತು. ಜೀವನದ ಅಂಶಗಳನ್ನು ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿ (ವೈಯಕ್ತಿಕ, ಕೌಟುಂಬಿಕ, ಸಾಮಾಜಿಕ, ಬೌದ್ಧಿಕ, ಹಣಕಾಸು, ಆಧ್ಯಾತ್ಮಿಕ) ನೆಮ್ಮದಿಯಿಂದ, ಶಾಂತಿಯುತವಾಗಿ, ಕಾನೂನುಬದ್ಧವಾಗಿ, ನೈತಿಕವಾಗಿ ಮತ್ತು ಆರೋಗ್ಯಕರ. ನಾಯಕರು ಅಕಾಡೆಮಿ ಕಾರ್ಯಕ್ರಮಗಳು ಜೀವನದ ದೀರ್ಘ ಫಲಿತಾಂಶಗಳು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ಇದು ಒಂದು ಸ್ಪೂರ್ತಿದಾಯಕ, ಪರಸ್ಪರ, ಅನುಭವದ ಜೀವನದಲ್ಲಿ ನೀವು ನೈಜ ನೀವು ಅನ್ವೇಷಿಸಲು ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮದ ಪರಿವರ್ತಿಸುವ ಇದೆ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['About' + 'BalaSir','Main pillar of Leaders Academy, Chairman of Inspire India Properties Ltd., Director of  Inspire India Financial Solutions Pvt Ltd., and President of Leaders Education Trust. Conducts dynamic programs on 360° transformation called "Leaders" in more than 40 cities all across country & aboard from 1998. Popularly known as "HAAPPY MAN".','ನಾಯಕರು ಅಕಾಡೆಮಿ, ಸ್ಫೂರ್ತಿ ಭಾರತ ಪ್ರಾಪರ್ಟೀಸ್ ಲಿಮಿಟೆಡ್, ಸ್ಫೂರ್ತಿ ಭಾರತ ಹಣಕಾಸು ಪರಿಹಾರಗಳು ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ನಿರ್ದೇಶಕ ಅಧ್ಯಕ್ಷ ಮತ್ತು ಅಧ್ಯಕ್ಷ ನಾಯಕರು ಶಿಕ್ಷಣ ಟ್ರಸ್ಟ್ ಮುಖ್ಯ ಪಿಲ್ಲರ್. ಎಲ್ಲಾ ದೇಶಾದ್ಯಂತ & ವಿಮಾನದಲ್ಲಿ 1998 ಜನಪ್ರಿಯವಾಗಿ "HAAPPY ಮನುಷ್ಯ" ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ 40 ನಗರಗಳಲ್ಲಿ 360 ° ರೂಪಾಂತರ ಎಂಬ "ನಾಯಕರು" ಕ್ರಿಯಾತ್ಮಕ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನಡೆಸುತ್ತದೆ.'], null, null);
	});
	
	myDB.transaction(function(transaction) {
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'WorkshopHeader','Workshop','ವರ್ಕ್ ಶಾಪ್'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'GLTHeader','GLT','ಜಿಎಲ್ಟಿ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'CTMHeader','CTM','ಸಿಟಿಎಮ್'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'NirvanaHeader','Nirvana','ನಿರ್ವಾಣ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'KurukshetraHeader','Kurukshetra','ಕುರುಕ್ಷೇತ್ರ'], null, null);

		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'Workshop','4 days (2 weekend) program to set the foundation and realize the hidden potential within YOU','ವರ್ಕ್ ಶಾಪ್'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'GLT','12 class program to convert the information to implementation. Completing Awaken program is prerequisite for this program.','ಜಿಎಲ್ಟಿ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'CTM','Completing GLT program is prerequisite for this program. You become the Core Team Member of Leaders Academy.','ಸಿಟಿಎಮ್'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'Nirvana','This is a 4 day program entirely on the Spiritual pillar of life. Connect with yourself and make your subconscious stronger.','ನಿರ್ವಾಣ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Program' + 'Kurukshetra','Leader Academy program is designed for holistic development of the human personality. Personality is seen in 6 different pillars of life – Personal, Family, Social, Intellectual, Financial and Spiritual. Click on each of the icon to see what each program offers.','ಕುರುಕ್ಷೇತ್ರ'], null, null);

		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Contact' + 'AddressHeader','Address','ವಿಳಾಸ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Contact' + 'PhoneHeader','Phone','ಪೋನ್'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Contact' + 'EmailHeader','Email','ಇಮೇಲ್'], null, null);

		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['FAQ' + '1Header','Is there any joining fee?','ಅಕಾಡೆಮಿ ಸೇರುವುದಕ್ಕೆ ಹಣ ಇದೆಯೇ?'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['FAQ' + '2Header','How many people have undergone training?','ಎಷ್ಟು ಜನ ಅಕಾಡೆಮಿ ಸೇರಿದ್ದಾರೆ?'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['FAQ' + '3Header','What if I don’t like the programme?','ನನಗೆ ಶಿಭಿರ ಇಷ್ಟವಾಗದಿದ್ದರೆ? '], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['FAQ' + '1','Yes. Please contact us for the current rates.','ಹೌದು. ದಯವಿಟ್ಟು ಪ್ರಸ್ತುತ ದರಗಳಿಗೆ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['FAQ' + '2','30,000+ participants and growing','ಭಾಗವಹಿಸಿದವರ 30,000 ಮತ್ತು ಬೆಳೆಯುತ್ತಿರುವ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['FAQ' + '3','At the end of the programme, if you still don’t like the programme, the amount is completely refunded with no questions asked.','ಕಾರ್ಯಕ್ರಮದ ಕೊನೆಯಲ್ಲಿ, ನಿಮಗೆ ಇನ್ನೂ ಪ್ರೋಗ್ರಾಂ ಇಷ್ಟವಾಗದಿದ್ದರೆ, ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿಲ್ಲದೆ ಸಂಪೂರ್ಣವಾಗಿ ಹಣ ಮರು ಆಗಲಿದೆ '], null, null);

		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'KHeader','Kurukshetra','ಕುರುಕ್ಷೇತ್ರ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'KContent','Kurukshetra Series talks about the topic and provides an in depth knowledge and clarity. The topics ranges from Family, Self Confidence, Entertainment to Enlightenment, Parenting etc. ','ಕುರುಕ್ಷೇತ್ರದ ಬಗ್ಗೆ ವಿವರಣೆ ಬರೆಯಬೇಕು'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'KLink','K11 – Self Confidence','ಕೆ11 - ಆತ್ಮವಿಶ್ವಾಸ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'SpeechHeader','Speech Contest','ಸ್ಪೀಚ್ ಕಾಂಟೆಸ್ಟ'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'SpeechContent','Speech Contest allows the member of Leaders Academy to contest for the best speech of the year.','ಸ್ಪೀಚ್ ಕಾಂಟೆಸ್ಟ ಬಗ್ಗೆ ವಿವರಣೆ ಬರೆಯಬೇಕು'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'SpeechLink1','Best Top 20 Speech – 2015','Best Top 20 Speech – 2015'], null, null);
		transaction.executeSql('INSERT INTO content (description, english, kannada) VALUES (?,?,?)', ['Gallery' + 'SpeechLink2','Best Top 20 Speech – 2016','Best Top 20 Speech – 2016'], null, null);
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
	});
	
	myDB.transaction(function(transaction) {
		transaction.executeSql('INSERT INTO setting (description, value) VALUES (?,?)', ['language','english'], function(txn, message){
			// Cache screen elements
			getLanguage();
		}, null);
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