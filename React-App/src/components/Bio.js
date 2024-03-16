/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import fetchRandomAyah from "./API";

const Bio = () => {
  const topAyah = "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ";
  const [randomAyahText, setRandomAyahText] = useState("");
  const [randomAyahNumber, setRandomAyahNumber] = useState("");
  const [randomAyahNumberInSurah, setRandomAyahNumberInSurah] = useState("");
  const [correctSurah, setCorrectSurah] = useState("");
  const [correctSurahNumber, setCorrectSurahNumber] = useState("");
  const [selectedSurah, setSelectedSurah] = useState("");
  const [score, setScore] = useState(0);
  const [hints, setHints] = useState(0);

  const quranSuraList = [
    { id: 0, value: 'لا أعلم' },
    { id: 1, value: 'الفاتحة' },
    { id: 2, value: 'البقرة' },
    { id: 3, value: 'آل عمران' },
    { id: 4, value: 'النساء' },
    { id: 5, value: 'المائدة' },
    { id: 6, value: 'الأنعام' },
    { id: 7, value: 'الأعراف' },
    { id: 8, value: 'الأنفال' },
    { id: 9, value: 'التوبة' },
    { id: 10, value: 'يونس' },
    { id: 11, value: 'هود' },
    { id: 12, value: 'يوسف' },
    { id: 13, value: 'الرعد' },
    { id: 14, value: 'إبراهيم' },
    { id: 15, value: 'الحجر' },
    { id: 16, value: 'النحل' },
    { id: 17, value: 'الإسراء' },
    { id: 18, value: 'الكهف' },
    { id: 19, value: 'مريم' },
    { id: 20, value: 'طه' },
    { id: 21, value: 'الأنبياء' },
    { id: 22, value: 'الحج' },
    { id: 23, value: 'المؤمنون' },
    { id: 24, value: 'النور' },
    { id: 25, value: 'الفرقان' },
    { id: 26, value: 'الشعراء' },
    { id: 27, value: 'النمل' },
    { id: 28, value: 'القصص' },
    { id: 29, value: 'العنكبوت' },
    { id: 30, value: 'الروم' },
    { id: 31, value: 'لقمان' },
    { id: 32, value: 'السجدة' },
    { id: 33, value: 'الأحزاب' },
    { id: 34, value: 'سبأ' },
    { id: 35, value: 'فاطر' },
    { id: 36, value: 'يس' },
    { id: 37, value: 'الصافات' },
    { id: 38, value: 'ص' },
    { id: 39, value: 'الزمر' },
    { id: 40, value: 'غافر' },
    { id: 41, value: 'فصلت' },
    { id: 42, value: 'الشورى' },
    { id: 43, value: 'الزخرف' },
    { id: 44, value: 'الدخان' },
    { id: 45, value: 'الجاثية' },
    { id: 46, value: 'الأحقاف' },
    { id: 47, value: 'محمد' },
    { id: 48, value: 'الفتح' },
    { id: 49, value: 'الحجرات' },
    { id: 50, value: 'ق' },
    { id: 51, value: 'الذاريات' },
    { id: 52, value: 'الطور' },
    { id: 53, value: 'النجم' },
    { id: 54, value: 'القمر' },
    { id: 55, value: 'الرحمن' },
    { id: 56, value: 'الواقعة' },
    { id: 57, value: 'الحديد' },
    { id: 58, value: 'المجادلة' },
    { id: 59, value: 'الحشر' },
    { id: 60, value: 'الممتحنة' },
    { id: 61, value: 'الصف' },
    { id: 62, value: 'الجمعة' },
    { id: 63, value: 'المنافقون' },
    { id: 64, value: 'التغابن' },
    { id: 65, value: 'الطلاق' },
    { id: 66, value: 'التحريم' },
    { id: 67, value: 'الملك' },
    { id: 68, value: 'القلم' },
    { id: 69, value: 'الحاقة' },
    { id: 70, value: 'المعارج' },
    { id: 71, value: 'نوح' },
    { id: 72, value: 'الجن' },
    { id: 73, value: 'المزمل' },
    { id: 74, value: 'المدثر' },
    { id: 75, value: 'القيامة' },
    { id: 76, value: 'الإنسان' },
    { id: 77, value: 'المرسلات' },
    { id: 78, value: 'النبأ' },
    { id: 79, value: 'النازعات' },
    { id: 80, value: 'عبس' },
    { id: 81, value: 'التكوير' },
    { id: 82, value: 'الإنفطار' },
    { id: 83, value: 'المطففين' },
    { id: 84, value: 'الإنشقاق' },
    { id: 85, value: 'البروج' },
    { id: 86, value: 'الطارق' },
    { id: 87, value: 'الأعلى' },
    { id: 88, value: 'الغاشية' },
    { id: 89, value: 'الفجر' },
    { id: 90, value: 'البلد' },
    { id: 91, value: 'الشمس' },
    { id: 92, value: 'الليل' },
    { id: 93, value: 'الضحى' },
    { id: 94, value: 'الشرح' },
    { id: 95, value: 'التين' },
    { id: 96, value: 'العلق' },
    { id: 97, value: 'القدر' },
    { id: 98, value: 'البينة' },
    { id: 99, value: 'الزلزلة' },
    { id: 100, value: 'العاديات' },
    { id: 101, value: 'القارعة' },
    { id: 102, value: 'التكاثر' },
    { id: 103, value: 'العصر' },
    { id: 104, value: 'الهمزة' },
    { id: 105, value: 'الفيل' },
    { id: 106, value: 'قريش' },
    { id: 107, value: 'الماعون' },
    { id: 108, value: 'الكوثر' },
    { id: 109, value: 'الكافرون' },
    { id: 110, value: 'النصر' },
    { id: 111, value: 'المسد' },
    { id: 112, value: 'الإخلاص' },
    { id: 113, value: 'الفلق' },
    { id: 114, value: 'الناس' }
  ];


useEffect(() => {
  fetchData();
  populateDataList();

  // Apply transition after a delay
  const bioTop = document.getElementById("bioTop");
  const bioCenter = document.querySelector(".bio__center");
  const score = document.getElementById("score");
  const buttonControls = document.getElementById("buttonControls");
  
  setTimeout(() => {
    bioTop.style.transform = "translateY(0)"; 
    bioTop.style.opacity = 1;
  }, 500); 
  setTimeout(() => {
    bioCenter.style.opacity = 1; 
  }, 2000); 
  setTimeout(() => {
    score.style.opacity = 1; 
  }, 5000); 
  setTimeout(() => {
    buttonControls.style.transform = "translateY(0)"; 
    buttonControls.style.opacity = 1;
  }, 3000); 
}, []);

  const fetchData = async (customAyahNumber = 0) => {
    const randomAyah = await fetchRandomAyah(customAyahNumber);
    setRandomAyahText(randomAyah.text);
    setRandomAyahNumberInSurah(`(${randomAyah.numberInSurah})`);
    setRandomAyahNumber(randomAyah.number)
    setCorrectSurah(randomAyah.surah.name);
    setCorrectSurahNumber(randomAyah.surah.number);
  };

  const populateDataList = () => {
    const datalist = document.getElementById('quranSuraList');
    datalist.innerHTML = '';

    // Populate datalist options from the array
    quranSuraList.forEach((item) => {
      const option = document.createElement('option');
      option.value = `${item.id} ${item.value}`; // Concatenate ID and text
      datalist.appendChild(option);
    });
  };

  const handleNextAyah = (event) => {
      event.preventDefault();
      fetchData();
  };

  const showNextAyah = (event) => {
    event.preventDefault();
    if (randomAyahNumber === 6236) return; // Corner Case: Last Verse of the Quraan
    fetchData(randomAyahNumber + 1);
    setHints(prevHints => prevHints + 1)
    if((hints + 1) % 2 === 0)
      setScore(score - 1)
  };
  const showPrevAyah = (event) => {
    event.preventDefault();
    if (randomAyahNumber === 1) return; // Corner Case: First Verse of the Quraan
    fetchData(randomAyahNumber - 1);
    setHints(prevHints => prevHints + 1)
    if((hints + 1) % 2 === 0)
      setScore(score - 1)
  };

  const checkAnswer = (event) => {
    event.preventDefault();
    const selectedSurahID = parseInt(selectedSurah); // Parse selectedSurah to an integer
    let updatedScore = score; // Initialize with the current score
    
    if (selectedSurahID === correctSurahNumber) {
      updatedScore = score + 2;
      handleNextAyah(event);
    }
    else if (selectedSurahID === 0 )
    {
        setRandomAyahText(correctSurah);
        setRandomAyahNumberInSurah("❤️");
        updatedScore = score - 1; // Penalty for not knowing
        setTimeout(() => {
          handleNextAyah(event);
          }, 2000); // wait for 2 seconds
    }
    else {
      updatedScore = score - 1;
    }

    // Update the score state
    setScore(updatedScore);
    setSelectedSurah(""); // Reset selectedSurah state to empty string
  };
  const handleKeyPress = (event) => {
    if (event && event.key === "Enter") {
      event.preventDefault();
      checkAnswer(event); // Pass the event object to checkAnswer function
    }
  };

  return (
    <div className="bio" dir="rtl">
      <div  className="bio__top"> <span id="bioTop"> {topAyah}</span>
        <div id="score" className="score-circle" dir="ltr">{score}</div>
      </div>
      
      <div className="bio__center">{randomAyahText} {randomAyahNumberInSurah}</div>
      <div className="horizontal-line"></div>
      
      <div id="buttonControls" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <form className="form">
          <input
            type="text"
            name="quranSura"
            list="quranSuraList"
            className="card__input"
            placeholder="اختر سورة من كتاب الله"
            value={selectedSurah}
            onChange={(e) => setSelectedSurah(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)} // Pass the event object to handleKeyPress
          />
          <datalist id="quranSuraList"></datalist>

          <div className="buttons">
            <button className="next-button" onClick={showPrevAyah}>الآية السابقة</button>
            <button className="submit-button" onClick={checkAnswer} >إرسال</button>
            <button className="next-button" onClick={showNextAyah}>الآية التالية</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bio;