import {
  TaskStatus,
  TaskCategory
} from '../src/api/tasks/enums'

export const TASKS = [{
    id: '0',
    title: 'גלגל הצופן',
    description: 'המשימות שלנו סודיות, אנחנו לא רוצים שאף אחד ידע מה הן! לכן, הסתרנו אותו בצופן שרק הטובים ביותר יצליחו לפענח. על מנת להוכיח את יכולתכם, פענחו את צופן הדוגמה!',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 15,
      [TaskCategory.STRATEGY]: 0,
      [TaskCategory.CREATIVE_THINKING]: 10,
      [TaskCategory.FIGHTING]: 0
    },
    status: TaskStatus.UNLOCKED
  },
  {
    id: '1',
    title: 'הגובה קובע',
    description: 'חושבים שאתם אמיצים? בסימולציה ראשונה מסוגה, תצטרכו להוכיח את האומץ שלכם!',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 0,
      [TaskCategory.STRATEGY]: 15,
      [TaskCategory.CREATIVE_THINKING]: 0,
      [TaskCategory.FIGHTING]: 15
    },
    status: TaskStatus.UNLOCKED
  },
  {
    id: '2',
    title: 'טובים השניים מן האחד',
    description: 'אתם צריכים להיות מוכנים לכל קרב, מכל סוג! כמובן, האימון הטוב ביותר הוא אחד נגד השני! כנסו ל-1vs1 ב-Minecraft והתאמנו לפחות פעם אחת, בכל אחד מסוגי הקרב הבאים:',
    items: [
      'OP PvP',
      'The Bridge',
      'Normal PvP',
      'SkyWars',
      'Bow PvP'
    ],
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 0,
      [TaskCategory.STRATEGY]: 5,
      [TaskCategory.CREATIVE_THINKING]: 0,
      [TaskCategory.FIGHTING]: 20
    },
    status: TaskStatus.UNLOCKED
  },
  {
    id: '3',
    title: 'טובים השניים מן השניים',
    description: 'אולי את החברים שלכם אתם מכירים, אבל את האויב אתם לא תכירו! שחקו ב-2vs2 ב-Minecraft מול 2 שחקנים שאתם לא מכירים ונצחו אותם ב-OP PvP.',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 0,
      [TaskCategory.STRATEGY]: 10,
      [TaskCategory.CREATIVE_THINKING]: 0,
      [TaskCategory.FIGHTING]: 25
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '4',
    title: 'פאה הונגרית',
    description: 'שמענו שאתם חכמים, על קוביה הונגרית שמעתם? המשימה קרבה ובאה, לכן אין זמן לפתור קוביה שלמה, פתרו פאה אחת בצבע לבחירתכם!',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 15,
      [TaskCategory.STRATEGY]: 0,
      [TaskCategory.CREATIVE_THINKING]: 15,
      [TaskCategory.FIGHTING]: 0
    },
    status: TaskStatus.UNLOCKED
  },
  {
    id: '5',
    title: 'פאה הונגרית, כפליים',
    description: 'חכמים! פאה אחת זה לא קל! אבל האם תצליחו גם את השכבה השנייה?',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 10,
      [TaskCategory.STRATEGY]: 0,
      [TaskCategory.CREATIVE_THINKING]: 10,
      [TaskCategory.FIGHTING]: 0
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '6',
    title: 'קוביה הונגרית',
    description: 'מטורפים! לא כל אחד יודע לפתור 2 שכבות בקוביה הונגרית, האם תצליחו לפתור אותה לגמרי?',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 15,
      [TaskCategory.STRATEGY]: 0,
      [TaskCategory.CREATIVE_THINKING]: 10,
      [TaskCategory.FIGHTING]: 0
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '7',
    title: 'קוביות מתגלגלות',
    description: 'אולי אתם טובים במשחקי PvP, אבל מה עם קצת חשיבה? פתרו 5 שלבים ב-Go Cubelets! על מנת להוכיח את הצלחתכם, מה היא כמות הקוביות הצהובות בשלב 5?',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 10,
      [TaskCategory.STRATEGY]: 5,
      [TaskCategory.CREATIVE_THINKING]: 0,
      [TaskCategory.FIGHTING]: 0
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '8',
    title: 'קוביות מתגלגלגלגלגלות',
    description: '5 שלבים זה עוד קליל, מה להגיע לשלב 10? מה צבע הקוביה החדשה?',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 5,
      [TaskCategory.STRATEGY]: 10,
      [TaskCategory.CREATIVE_THINKING]: 0,
      [TaskCategory.FIGHTING]: 0
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '9',
    title: 'הבנאים באים',
    description: 'בשטח אין מיטות, מקלחות, כלום! אתם תצטרכו לבנות הכל לבד! על מנת למנות את אחראי הבניה, התחרו אחד בשני בקרב בנייה ב-Minecraft!',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 10,
      [TaskCategory.STRATEGY]: 0,
      [TaskCategory.CREATIVE_THINKING]: 20,
      [TaskCategory.FIGHTING]: 0
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '10',
    title: 'בונים ונלחמים',
    description: 'הוכחתם כמה אתם טובים בבנייה! על אחראי הבנייה להתחרות במשחק Build Battle ב-HyPixel ולהשיג ניקוד כמה שיותר גבוה!',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 0,
      [TaskCategory.STRATEGY]: 5,
      [TaskCategory.CREATIVE_THINKING]: 10,
      [TaskCategory.FIGHTING]: 5
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '11',
    title: 'מדריך הטרמפיסט לגלקסיה',
    description: 'אין לדעת לאן תגיעו, היקום הוא דבר מורכב, חשוב להכיר אותו! פתחו Universe Sandbox ובדקו מה קורה במקרים הבאים:',
    items: [
      'הכפילו פי 50 את המסה  ("משקל") של כדור הארץ',
      'שימו 2 כדורי באולינג בחלל ריק',
      'הפכו את השמש לחור שחור'
    ],
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 5,
      [TaskCategory.STRATEGY]: 0,
      [TaskCategory.CREATIVE_THINKING]: 15,
      [TaskCategory.FIGHTING]: 0
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '12',
    title: 'קודקוד',
    description: 'אחרי הכל אתם ביחידת סייבר! אז כדאי שתדעו קצת "סייבר", פתרו את אתגר ה-Technoות! מתכנת טוב בודק את תוצאותיו, מה המילה הראשונה ברשימה החדשה?',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 15,
      [TaskCategory.STRATEGY]: 0,
      [TaskCategory.CREATIVE_THINKING]: 10,
      [TaskCategory.FIGHTING]: 0
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '13',
    title: 'פייפר פאזל',
    description: 'יש לנו בלאגן! כל המסמכים שלנו התבלגנו! יש לנו קוד סודי המורכב מ-3 על 3 דפים. אנחנו שולחים לכם את כל המסמכים, אבל שימו לב, בעקבות הבלאגן יש כמה דפים מקוד אחר. שימו לב להשתמש בדפים הנכונים בלבד!',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 15,
      [TaskCategory.STRATEGY]: 0,
      [TaskCategory.CREATIVE_THINKING]: 20,
      [TaskCategory.FIGHTING]: 0
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '14',
    title: 'טובים השניים מן המאה',
    description: 'שמענו אתם טובים במשחקי מחשב, שמעתם על Fortnite? כנראה שכן, התחילו משחק כזוג והרגו לפחות 5 שחקנים!',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 0,
      [TaskCategory.STRATEGY]: 15,
      [TaskCategory.CREATIVE_THINKING]: 0,
      [TaskCategory.FIGHTING]: 30
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '15',
    title: 'לייט-איט-אפ',
    description: 'לוחמים טובים הם חדי הבחנה ומסוגלים לבצע פעולות במהרה. כמה זה ירוק, כפול צהוב פחות ורוד? מהר!',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 15,
      [TaskCategory.STRATEGY]: 0,
      [TaskCategory.CREATIVE_THINKING]: 10,
      [TaskCategory.FIGHTING]: 0
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '16',
    title: 'כלכלני המאה',
    description: 'לצערנו יש לארגון כמות משאבים מוגבלת, אנחנו צריכים את עזרתכם לדעת לנצל אותם בצורה הטובה ביותר! בעזרת המשאבים לרשותכם, קנו קלפים והגיעו לכמות הנקודות הגבוה ביותר!',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 10,
      [TaskCategory.STRATEGY]: 10,
      [TaskCategory.CREATIVE_THINKING]: 0,
      [TaskCategory.FIGHTING]: 0
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '17',
    title: 'ציפורנחש',
    description: 'זה ציפור?! זה נחש?! זה Snakebird! הערכת מצבים היא יכולת חשובה, הגיעו לשלב 7 ב-Snakebird! זה נראה אומנם קל, האם תצליחו? על מנת להוכיח את הצלחתם, כמה Snakebirds יש בשלב 7? כמובן, אין להיכנס לשלב 7 לפני שפתרתם את כל השלבים הקודמים!',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 10,
      [TaskCategory.STRATEGY]: 15,
      [TaskCategory.CREATIVE_THINKING]: 0,
      [TaskCategory.FIGHTING]: 0
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '18',
    title: 'ציפורנחשדג',
    description: 'כמה ציפור! כמה נחש! הגיע הזמן לצלול מתחת למים, הגיעו לשלב 10, מה צבע הפרחים בשלב זה? כמובן, פתרו את כל השלבים עד 10 לפני!',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 10,
      [TaskCategory.STRATEGY]: 0,
      [TaskCategory.CREATIVE_THINKING]: 5,
      [TaskCategory.FIGHTING]: 0
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '19',
    title: 'בונים, באמת!',
    description: 'בניתם במשחק, זה מצויין, אבל מה עם העולם הפיזי? שכחתם אותו? אספו כמה שיותר חומרים ובנו את המבנה היפה והגבוה ביותר שאתם יכולים!',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 5,
      [TaskCategory.STRATEGY]: 0,
      [TaskCategory.CREATIVE_THINKING]: 10,
      [TaskCategory.FIGHTING]: 10
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '20',
    title: 'פופ פופ פופ',
    description: 'חשוב שתכירו את תרבות האינטרנט, בסופו של דבר, זה העולם בו אתם חיים! הכנו מדגם של 7 דמויות מוכרות, בצורת פופ! עליכם לזהות את איזה פופ מייצג איזו דמות!',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 10,
      [TaskCategory.STRATEGY]: 0,
      [TaskCategory.CREATIVE_THINKING]: 10,
      [TaskCategory.FIGHTING]: 0
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '21',
    title: 'משאבי אנוש',
    description: 'לוחם אמיתי צריך לדעת להשיג משאבים בשטח! על מנת לוודא שאתם מסוגלים, תצטרכו לצבור 500 מכל משאב ב-Fortnite.',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 0,
      [TaskCategory.STRATEGY]: 10,
      [TaskCategory.CREATIVE_THINKING]: 0,
      [TaskCategory.FIGHTING]: 15
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '22',
    title: 'הטובים ביותר',
    description: 'הוכיחו שאתם מסוגלים לשרוד בשטח. הגיעו לטופ 25 ב-Fortnite.',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 0,
      [TaskCategory.STRATEGY]: 15,
      [TaskCategory.CREATIVE_THINKING]: 0,
      [TaskCategory.FIGHTING]: 20
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '23',
    title: 'צלף אמריקאי',
    description: 'כל לוחם צריך לדעת לצלוף. אי אפשר לדעת באיזה מרחק האויב בכל רגע נתון. השיגו קיל ב-Fortnite על ידי שימוש ב-Sniper Rifle.',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 5,
      [TaskCategory.STRATEGY]: 10,
      [TaskCategory.CREATIVE_THINKING]: 0,
      [TaskCategory.FIGHTING]: 15
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '24',
    title: 'להיות כמו מסי',
    description: 'מסי, משחק כבר מעל 10 שנים, הוא אחד השחקנים הטובים בעולם. יש לו זריזות רגליים מטורפת! הוכיחו שגם אתם זריזים ונצחו משחק פיפא בתור ברצלונה.',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 0,
      [TaskCategory.STRATEGY]: 10,
      [TaskCategory.CREATIVE_THINKING]: 0,
      [TaskCategory.FIGHTING]: 15
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '25',
    title: 'כוח ברגליים',
    description: 'חלק מהידע של לוחם מיומן הוא גם להילחם ללא נשק. לשם כך תצטרכו לבנות את הגוף שלכם, וגם את הרגליים. שחקו משחק פיפא ותראו לנו שאתם מסוגלים להבקיע שער מחוץ לרחבת היריב ושהרגליים שלכם מספיק חזקות.',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 0,
      [TaskCategory.STRATEGY]: 10,
      [TaskCategory.CREATIVE_THINKING]: 5,
      [TaskCategory.FIGHTING]: 10
    },
    status: TaskStatus.LOCKED
  },
  {
    id: '26',
    title: 'ניצחון מוחץ',
    description: 'הדרך האולטימטיבית להראות כוח, זריזות ומחשבה היא לנצח נצחון מוחץ בפיפא. שחקו משחק שלם ונצחו את המחשב עם הפרש של יותר מ 3 שערים.',
    points: {
      [TaskCategory.PROBLEM_SOLVING]: 0,
      [TaskCategory.STRATEGY]: 10,
      [TaskCategory.CREATIVE_THINKING]: 10,
      [TaskCategory.FIGHTING]: 10
    },
    status: TaskStatus.LOCKED
  }
];