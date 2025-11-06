export type Quote = {
  id: string;
  originalArabic?: string;
  translationSq: string;
  translationEn: string;
  tags: string[];
  source: {
    work: string;
    reference: string;
  };
  commentary: string;
};

export const quotes: Quote[] = [
  {
    id: "ilm-precedes",
    originalArabic: "قَدْ أَجْمَعَ أَهْلُ الْعِلْمِ أَنَّ الْعِلْمَ سَابِقٌ لِلْقَوْلِ وَالْعَمَلِ",
    translationSq:
      "Dijetarët janë të njëzëshëm se dituria i paraprin fjalës dhe veprës.",
    translationEn: "The people of knowledge are unanimous that knowledge precedes speech and action.",
    tags: ["dijet", "veprim", "këshillë"],
    source: {
      work: "Jāmiʿ Bayān al-ʿIlm wa Faḍlih",
      reference: "Vëll. 1, fq. 57"
    },
    commentary:
      "Ibn Abd al-Barr thekson se një zemër e ndriçuar nga dituria udhëzon fjalën dhe veprën. Prandaj kërkimi i dijes është hapi i parë për çdo udhëtim shpirtëror."
  },
  {
    id: "knowledge-calls-action",
    originalArabic: "الْعِلْمُ يَهْتِفُ بِالْعَمَلِ، فَإِنْ أَجَابَهُ وَإِلَّا ارْتَحَلَ",
    translationSq:
      "Dituria e thërret veprimin; nëse i përgjigjet, mbetet, e nëse jo, largohet.",
    translationEn: "Knowledge calls to action; if it is answered, it remains, and if it is not, it departs.",
    tags: ["veprim", "moral", "disiplinë"],
    source: {
      work: "Jāmiʿ Bayān al-ʿIlm wa Faḍlih",
      reference: "Vëll. 1, fq. 56"
    },
    commentary:
      "Ky parim e lidh fort dijen me praktikën: njohuria pa veprim është e cënueshme dhe kalimtare."
  },
  {
    id: "humility",
    originalArabic:
      "يَنْبَغِي لِطَالِبِ الْعِلْمِ أَنْ يُوَقِّرَ نَفْسَهُ، وَيُجِلَّ الْعِلْمَ، وَأَنْ يَتَوَاضَعَ لِلَّهِ فِي كُلِّ أَحْوَالِهِ",
    translationSq:
      "Kërkuesi i dijes duhet ta nderojë veten, të madhërojë dijen dhe të jetë i përulur për hir të Allahut në çdo gjendje.",
    translationEn:
      "The seeker of knowledge should honour himself, venerate knowledge, and remain humble before God in all of his states.",
    tags: ["etike", "përulësi", "adab"],
    source: {
      work: "Jāmiʿ Bayān al-ʿIlm wa Faḍlih",
      reference: "Vëll. 1, fq. 454"
    },
    commentary:
      "Adabi i studentit është thelbësor për ruajtjen e sinqeritetit dhe fuqinë e fjalës së tij."
  },
  {
    id: "companionship",
    originalArabic:
      "إِنَّمَا يُعْرَفُ الْعَالِمُ بِمَنْ يُجَالِسُهُ وَمَنْ يُخَالِلُهُ، فَاحْرِصْ عَلَى صُحْبَةِ أَهْلِ الْبِرِّ",
    translationSq:
      "Dijetari njihet nga ata me të cilët shoqërohet; andaj zgjidh shoqërinë e njerëzve të virtytit.",
    translationEn:
      "A scholar is known by the company he keeps, so be keen to accompany the people of righteousness.",
    tags: ["shoqëri", "virtyt", "mjedis"],
    source: {
      work: "Bahjat al-Majālis",
      reference: "2/777"
    },
    commentary:
      "Përzgjedhja e shoqërisë është pjesë e ruajtjes së dijes dhe ndikimit të saj."
  },
  {
    id: "memorisation-reflection",
    originalArabic:
      "لَيْسَ الْعَالِمُ مَنْ وَعَى كَلَامًا فَرَوَاهُ، إِنَّمَا الْعَالِمُ مَنْ فَهِمَ الْعِلْمَ فَعَمِلَ بِهِ",
    translationSq:
      "Dijetari nuk është ai që veç kujton fjalë dhe i transmeton; dijetari është ai që e kupton dijen dhe vepron me të.",
    translationEn:
      "The scholar is not the one who merely memorises speech and narrates it; the scholar is the one who understands knowledge and acts upon it.",
    tags: ["thellim", "kuptim", "praktikë"],
    source: {
      work: "Jāmiʿ Bayān al-ʿIlm wa Faḍlih",
      reference: "Vëll. 1, fq. 43"
    },
    commentary:
      "Kriteri i dijes së dobishme është kuptimi i thellë që sjell ndryshim në sjellje."
  }
];
