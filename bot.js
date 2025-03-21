const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

const adhkar = [
    "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
    "أستغفر الله",
    "سبحان الله والحمد لله ولا إله إلا الله والله أكبر",
    "لا حول ولا قوة إلا بالله",
    "اللهم صل على محمد",
    "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلا إِلَهَ إِلا اللَّهُ وَاللَّهُ أَكْبَرُ",
    "أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه",
    "يا رب لك الحمد كما ينبغي لجلال وجهك وعظيم سلطانك",
    "اللهم إني أسألك العفو والعافية في الدنيا والآخرة",
    "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ",
    "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ",
    "رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً",
    "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
    "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ",
    "أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ",
    "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    "لا إلَه إلاّ اللّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءٍ قَدِيرِ",
    "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
    "اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَعَافِنِي، وَارْزُقْنِي"
];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    
    const channelId = '1344698004996886641'; //  معرف القناة 
    const channel = client.channels.cache.get(channelId);
    
    if (channel) {
        setInterval(() => {
            const randomDhikr = adhkar[Math.floor(Math.random() * adhkar.length)];
            channel.send(randomDhikr);
        }, 3600000); // إرسال ذكر كل ساعة
    } else {
        console.log("تعذر العثور على القناة، تحقق من معرف القناة.");
    }
});

client.login(''); //  توكن البوت 

// https://github.com/favi-dev?tab=overview&from=2025-02-01&to=2025-02-28  > تحفة الأذكار
