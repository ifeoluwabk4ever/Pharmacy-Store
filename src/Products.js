import React from 'react'
import { FaAmbulance, FaBed, FaHandHoldingHeart, FaHeartbeat, FaHelicopter, FaPhoneSquareAlt, FaStethoscope, FaUserMd } from 'react-icons/fa'
import doc1 from './images/doc1.jpg'
import doc2 from './images/doc2.jpg'
import doc3 from './images/doc3.jpg'
import doc4 from './images/doc4.jpg'
import sponsor1 from './images/GenXys.png'
import sponsor2 from './images/Harmonic.png'
import sponsor3 from './images/NIH.png'
import sponsor4 from './images/Syapse.png'
import sponsor5 from './images/Synkwise.png'
import gallery1 from './images/gallery1.jpg'
import gallery2 from './images/gallery2.jpg'
import gallery3 from './images/gallery3.jpg'
import gallery4 from './images/gallery4.jpg'
import gallery5 from './images/gallery5.jpg'
import gallery6 from './images/gallery6.jpg'
import gallery7 from './images/mainBg.jpg'
import gallery8 from './images/work2.jpg'
import drug1 from './images/chloroquine.jpeg'
import drug2 from './images/doxycycline.jpeg'
import drug3 from './images/mefloquine1.jpeg'
import drug4 from './images/atovaquone.jpeg'
import drug5 from './images/amoxicillin.jpeg'
import drug6 from './images/cipro.jpeg'
import drug7 from './images/azithro.jpeg'
import drug8 from './images/cephalo.jpeg'
import drug9 from './images/aspirin.jpeg'
import drug10 from './images/paracetamol.jpeg'
import drug11 from './images/tetracycline.jpeg'
import drug12 from './images/diclo.jpeg'
import drug13 from './images/metoclo.jpeg'
import drug14 from './images/ibupro.jpeg'
import drug15 from './images/promethazine.jpeg'
import drug16 from './images/pyridoxine.jpeg'



export let services = [
    {
        icon:<FaStethoscope />,
        title: 'Best treatment',
        info: 'Lorem ipsum dolor sit amet consectetue sagejmlngrbjik erli srgsl, hbm worngl!'
    },
    {
        icon:<FaPhoneSquareAlt />,
        title: 'emergency help',
        info: 'Lorem ipsum dolor sit amet consectetue sagejmlngrbjik erli srgsl, hbm worngl!'
    },
    {
        icon:<FaUserMd />,
        title: 'medical staff',
        info: 'Lorem ipsum dolor sit amet consectetue sagejmlngrbjik erli srgsl, hbm worngl!'
    },
    {
        icon:<FaAmbulance />,
        title: 'qualified doctors',
        info: 'Lorem ipsum dolor sit amet consectetue sagejmlngrbjik erli srgsl, hbm worngl!'
    }
]

export let workRate = [
    {
        icon:<FaHandHoldingHeart />,
        number: 1000 + '+',
        remark: 'happy customer'
    },
    {
        icon:<FaHeartbeat />,
        number: 2017 + '+',
        remark: 'top hospitality'
    },
    {
        icon:<FaHelicopter />,
        number: 1105 + '+',
        remark: 'innovative approach'
    },
    {
        icon:<FaBed />,
        number: 500 + '+',
        remark: 'adequate bedspace'
    }
]

export let teamMembers = [
    {
        img: doc1,
        name: 'dr ricky doe',
        title: 'assistant surgeon'
    },
    {
        img: doc2,
        name: 'dr john stone',
        title: 'surgeon'
    },
    {
        img: doc3,
        name: 'dr jane bastin',
        title: 'optician'
    },
    {
        img: doc4,
        name: 'dr mill graham',
        title: 'dentist'
    }
]

export let sponsors = [
    {
        name: 'GenXys',
        img: sponsor1
    },
    {
        name: 'Harmonic',
        img: sponsor2
    },
    {
        name: 'NIH',
        img: sponsor3
    },
    {
        name: 'Syapse',
        img: sponsor4
    },
    {
        name: 'Synkwise',
        img: sponsor5
    }
]

export let gallery = [
    {
        name: 'gallery1',
        img: gallery1
    },
    {
        name: 'gallery2',
        img: gallery2
    },
    {
        name: 'gallery3',
        img: gallery3
    },
    {
        name: 'gallery4',
        img: gallery4
    },
    {
        name: 'gallery5',
        img: gallery5
    },
    {
        name: 'gallery6',
        img: gallery6
    },
    {
        name: 'gallery7',
        img: gallery7
    },
    {
        name: 'gallery8',
        img: gallery8
    },
    {
        name: 'gallery9',
        img: doc1
    },
    {
        name: 'gallery10',
        img: doc2
    },
    {
        name: 'gallery11',
        img: doc3
    },
    {
        name: 'gallery12',
        img: doc4
    }
]

export let items = [
    {
        sys: {
            id: "1"
        },
        fields: {
            name: "chloroquine",
            slug: "chloroquine-phosphate",
            type: "anti-malaria",
            company: "Aralen",
            price: 100,
            packets: 200,
            count: 0,
            total: 0,
            inCart: false,
            featured: true,
            description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            uses: [
                "prevents malaria",
                "Treats infections"
            ],
            application: [
                "by mouth",
                "by injection"
            ],
            dosage: [
                "once a week for 4 to 8 weeks"
            ],
            sideEffect: [
                "headache",
                "nausea",
                "loss of appetite",
                "diarrhea",
                "upset stomach",
                "stomach pain",
                "rash",
                "itching"
            ],
            precaution: [
                "may make you dizzy or lose your balance",
                "may cause live bacteria not to work well"
            ],
            images: {
                fields: {
                    file: {
                        url: drug1
                    }
                }
            }
        }
    },
    {
        sys: {
            id: "2"
        },
        fields: {
            name: "Doxycyline",
            slug: "doxycyline",
            type: "anti-malaria",
            company: "Acticlate",
            price: 120,
            packets: 250,
            count: 0,
            total: 0,
            inCart: false,
            featured: false,
            description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            uses: [
                "prevents malaria",
                "treats eye infection",
                "treats blemishes",
                "Treats bacterial infections"
            ],
            sideEffects: [
                "loss of appetite",
                "headache",
                "diarrhea"
            ],
            precaution: [
                "not to be taken if allergic to any tetracycline antibiotic",
                "childrens younger than 8 years should only use in severe cases",
                "using during pregnancy could harm unborm baby"
            ],
            application: [
                "by mouth",
                "by injection"
            ],
            dosage: [
                "take on an empty stomach at least 1 hour before or 2 hours after a meal",
            ],
            images: {
                fields: {
                    file: {
                        url: drug2
                    }
                }
            }
        }
    },
    {
        sys: {
            id: "3"
        },
        fields: {
            name: "mefloquine",
            slug: "mefloquine-hcl",
            type: "anti-malaria",
            company: "Lariam",
            price: 43.43,
            packets: 250,
            count: 0,
            total: 0,
            inCart: false,
            featured: false,
            description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            uses: [
                "prevents malaria",
                "treat malaria"
            ],
            sideEffects: [
                "loss of appetite",
                "headache",
                "diarrhea"
            ],
            application: [
                "by mouth"
            ],
            precaution: [
                "may make you dizzy or lose your balance",
                "may cause live bacteria not to work well"
            ],
            dosage: [
                "do not take on empty stomach",
                "once a week the same day each week"
            ],
            images: {
                fields: {
                    file: {
                        url: drug3
                    }
                }
            }
        }
    },
    {
        sys: {
            id: "4"
        },
        fields: {
            name: "atovaquone-proguanil",
            slug: "atovaquone-proguanil-hcl",
            type: "anti-malaria",
            company: "Lariam",
            price: 126.65,
            packets: 150,
            count: 0,
            total: 0,
            inCart: false,
            featured: false,
            description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            uses: [
                "prevents malaria",
                "prvention of return of infection(relapse)"
            ],
            sideEffects: [
                "loss of appetite",
                "abdominal pain",
                "weakness"
            ],
            application: [
                "by mouth"
            ],
            precaution: [
                "may make you dizzy or lose your balance",
                "may cause live bacteria not to work well"
            ],
            dosage: [
                "dosage in children is based on weight",
                "based on medical condition",
                "once daily at same thime each day for a week"
            ],
            images: {
                fields: {
                    file: {
                        url: drug4
                    }
                }
            }
        }
    },
    {
        sys: {
            id: "5"
        },
        fields: {
            name: "amoxicilin",
            slug: "amoxicilin",
            type: "anti-biotics",
            company: "Amoxil",
            price: 100,
            packets: 200,
            count: 0,
            total: 0,
            inCart: false,
            featured: true,
            description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            uses: [
                "treat stomach ucler",
                "Treats infections caused by bacteria"
            ],
            application: [
                "by mouth"
            ],
            dosage: [
                "3 times a day for a week"
            ],
            sideEffect: [
                "body pain",
                "bleeding gums",
                "bloody nose",
                "blistering",
                "upset stomach",
                "blood in the urine",
                "bloating",
                "chest pain"
            ],
            precaution: [
                "do nto use if allergy to anti-biotics",
                "can make birth control pills less effective",
                "can cause diarrhea"
            ],
            images: {
                fields: {
                    file: {
                        url: drug5
                    }
                }
            }
        }
    },
    {
        sys: {
            id: "6"
        },
        fields: {
            name: "ciproflaxin",
            slug: "ciproflaxin",
            type: "anti-biotics",
            company: "Cipro",
            price: 10.14,
            packets: 250,
            count: 0,
            total: 0,
            inCart: false,
            featured: false,
            description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            uses: [
                "stop growth of bacteria",
                "Treats bacterial infections"
            ],
            sideEffects: [
                "lightheadedness",
                "trouble sleeping",
                "diarrhea"
            ],
            precaution: [
                "take the drug 2 hours before or 6 hours afer taking other products",
                "may cause conditions that affects the heart",
                "may rarely cause changes in the blood sugar"
            ],
            application: [
                "by mouth"
            ],
            dosage: [
                "may be taken with or without food",
                "twice daily",
                "shake container well before each dosage"
            ],
            images: {
                fields: {
                    file: {
                        url: drug6
                    }
                }
            }
        }
    },
    {
        sys: {
            id: "7"
        },
        fields: {
            name: "azythromycin",
            slug: "azythromycin",
            type: "anti-biotics",
            company: "Zithromax",
            price: 43.43,
            packets: 250,
            count: 0,
            total: 0,
            inCart: false,
            featured: false,
            description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            uses: [
                "prevents malaria",
                "treat malaria"
            ],
            sideEffects: [
                "loss of appetite",
                "headache",
                "diarrhea"
            ],
            application: [
                "by mouth"
            ],
            precaution: [
                "may make you dizzy or lose your balance",
                "may cause live bacteria not to work well"
            ],
            dosage: [
                "do not take on empty stomach",
                "once a week the same day each week"
            ],
            images: {
                fields: {
                    file: {
                        url: drug7
                    }
                }
            }
        }
    },
    {
        sys: {
            id: "8"
        },
        fields: {
            name: "Cephalosporins",
            slug: "cephalosporins",
            type: "anti-biotics",
            company: "Lariam",
            price: 126.65,
            packets: 150,
            count: 0,
            total: 0,
            inCart: false,
            featured: false,
            description: "Cephalosporins are a large group of β-lactam antibiotics with broad spectrum of activity,compared to older antibiotics cephalosporins have good pharmacokinetic profile and low drug toxicity. Based on their spectrum of activity they are classified into four generations.",
            uses: [
                "prevents malaria",
                "treat respitory tract infection",
                "complicated urinary tract infections"
            ],
            sideEffects: [
                "rahes",
                "nausea",
                "diarrhea"
            ],
            application: [
                "by mouth"
            ],
            precaution: [
                "do nto take if breastfeeding",
                "may cause live bacteria not to work well"
            ],
            dosage: [
                "twice daily for a week"
            ],
            images: {
                fields: {
                    file: {
                        url: drug8
                    }
                }
            }
        }
    },
    {
        sys: {
            id: "9"
        },
        fields: {
            name: "aspirin",
            slug: "aspirin",
            type: "analgesics",
            company: "Aspirin (Bayer)",
            price: 100,
            packets: 200,
            count: 0,
            total: 0,
            inCart: false,
            featured: true,
            description:
            " Aspirin, is a salicylate that relieves headaches, muscular and joint pains, and reduces inflammation. ASA has been considered the drug of choice in the treatment of arthritis, but its anti-inflammatory action occurs only when given in large doses.",
            uses: [
                "for pain",
                "for fever"
            ],
            application: [
                "by mouth"
            ],
            dosage: [
                "Adult: 350 - 650 mg q. 4 h. for minor aches and pain."
            ],
            sideEffect: [
                "dizziness",
                "skin eruptions,",
                "increase bleeding tendency,",
                " hypersensitivity reactions",
                "cinchonism (ringing in the ear)"
            ],
            precaution: [
                "not recommended for children",
                " should not be used for self-medication of pain for longer than 10 days in adults or 5 days in children",
                "not to be taken on empty stomach"
            ],
            images: {
                fields: {
                    file: {
                        url: drug9
                    }
                }
            }
        }
    },
    {
        sys: {
            id: "10"
        },
        fields: {
            name: "paracetamol",
            slug: "paracetamol",
            type: "analgesics",
            company: "Panadol",
            price: 120,
            packets: 250,
            count: 0,
            total: 0,
            inCart: false,
            featured: false,
            description:
            "It is equivalent to aspirin in relieving pain and reducing fever, but it has little effect on platelet function, does not affect bleeding time and generally produces no gastric bleeding or ulcers. It has no anti-inflammatory action in usual doses. Paracetamol reduces fever by direct action on the hypothalamus heat-regulating center with consequent peripheral vasodilatation, sweating and dissipation of heat.",
            uses: [
                "for pain",
                "for fever",
                "good substitute for aspirin"
            ],
            sideEffects: [
                "Skin rashes",
                "neutropenia",
                "Heavy alcoholics and smokers are more susceptible to liver toxicity"
            ],
            precaution: [
                "don not exceed recommended doses",
                "Chronic excessive use eventually may lead to transient hepatotoxicity"
            ],
            application: [
                "by mouth"
            ],
            dosage: [
                "Adult: orally (per os): 325-650 mg q. 4-6 h. as needed; max. 4 g/24 hours.",
                "Child: orally (per os): 10-15 mg/kg/dose.",
                "*The doses may be repeated every (q.) 4-6 h. not to exceed 4 doses in 24 hours"
            ],
            images: {
                fields: {
                    file: {
                        url: drug10
                    }
                }
            }
        }
    },
    {
        sys: {
            id: "11"
        },
        fields: {
            name: "tetracycline",
            slug: "tetracycline",
            type: "analgesics",
            company: "capsule",
            price: 23.43,
            packets: 250,
            count: 0,
            total: 0,
            inCart: false,
            featured: false,
            description:
            "Ibuprofen (IBP) is a propionic acid derivative. Comparable to aspirin (ASA) in its analgesic action, but higher doses are required for anti-inflammatory effect. It has been reported to have less GI symptoms than aspirin in equal-effective doses. Cross-sensitivity with ASA and other NSAIDs has been reported. IBP inhibits platelet aggregation and prolongs bleeding time, but does not affect prothrombin or whole blood clotting times.",
            uses: [
                "for pain",
                "for fever"
            ],
            sideEffects: [
                "dyspepsia",
                "nausea",
                "gastritis and ulceration",
                "heartburn"
            ],
            application: [
                "by mouth"
            ],
            precaution: [
                "Patients with history of cardiac decompensation should be observed closely for evidence of fluid retention and edema",
                "Caution in hypertension, chronic renal failure and patients with Systemic lupus erythematous SLE. Advise patient not to drink alcohol, to avoid increased risk of GI ulceration and bleeding"
            ],
            dosage: [
                "Adult: 200-400 mg PO q. 4-6 h., max. 1800 mg/24 hours for pain and fever",
                "400-800 mg t.i.d. or q.i.d.; max. 3200 mg/d for inflammation cases"
            ],
            images: {
                fields: {
                    file: {
                        url: drug11
                    }
                }
            }
        }
    },
    {
        sys: {
            id: "12"
        },
        fields: {
            name: "Diclofenac",
            slug: "diclofenac",
            type: "analgesics",
            company: "Diclofen (JePharm, Rufenal (BPC)",
            price: 126.65,
            packets: 150,
            count: 0,
            total: 0,
            inCart: false,
            featured: false,
            description:
            "Diclofenac sodium (Figure 4) is an acetic acid derivative. It has analgesic, antipyretic, and anti-inflammatory properties. At therapeutic doses it has little effect on platelet aggregation. Patients not responding to IBP can be given diclofenac instead. Do not coadminister with other NSAIDs or salicylates.",
            uses: [
                "for pain",
                "for fever"
            ],
            sideEffects: [
                "dyspepsia",
                "nausea",
                "gastritis and ulceration",
                "heartburn"
            ],
            application: [
                "by mouth"
            ],
            precaution: [
                " There is some evidence that diclofenac inhibits the lipoxygenase pathway",
                "May decrease blood pressure lowering effects of diuretics"
            ],
            dosage: [
                "Adult: 75-150 mg/24h given by mouth in divided doses",
                "Total daily dose should not exceed 150 mg/daily,"
            ],
            images: {
                fields: {
                    file: {
                        url: drug12
                    }
                }
            }
        }
    },
    {
        sys: {
            id: "13"
        },
        fields: {
            name: "metoclopramide",
            slug: "metoclopramide-hcl",
            type: "antiemetic",
            company: "Regan",
            price: 5.04,
            packets: 200,
            count: 0,
            total: 0,
            inCart: false,
            featured: true,
            description:
            " Aspirin, is a salicylate that relieves headaches, muscular and joint pains, and reduces inflammation. ASA has been considered the drug of choice in the treatment of arthritis, but its anti-inflammatory action occurs only when given in large doses.",
            uses: [
                "prevent nausea and vomiting",
                "used for diabetes",
                "used to empty stomach"
            ],
            application: [
                "by mouth"
            ],
            dosage: [
                "twice daily"
            ],
            sideEffect: [
                "dizziness",
                "drownsiness",
                "tiredness",
                "trouble sleeping",
                "tiredness"
            ],
            precaution: [
                "not recommended for children",
                " should not be used for self-medication of pain for longer than 10 days in adults or 5 days in children"
            ],
            images: {
                fields: {
                    file: {
                        url: drug13
                    }
                }
            }
        }
    },
    {
        sys: {
            id: "14"
        },
        fields: {
            name: "ibuprofen",
            slug: "ibuprofen",
            type: "antiemetic",
            company: "nuprin",
            price: 30.54,
            packets: 250,
            count: 0,
            total: 0,
            inCart: false,
            featured: false,
            description:
            "It is equivalent to aspirin in relieving pain and reducing fever, but it has little effect on platelet function, does not affect bleeding time and generally produces no gastric bleeding or ulcers. It has no anti-inflammatory action in usual doses. Paracetamol reduces fever by direct action on the hypothalamus heat-regulating center with consequent peripheral vasodilatation, sweating and dissipation of heat.",
            uses: [
                "for relieving pain",
                "for menstrual cramps",
                "muscle aches",
                "dental pain"
            ],
            sideEffects: [
                "upset stomach",
                "nausea",
                "vomiting",
                "dizziness"
            ],
            precaution: [
                "may raise blood pressure",
                "may rarely cause liver disease"
            ],
            application: [
                "by mouth"
            ],
            dosage: [
                "every 4-6 hours",
                "do not lie down 10 minutes after"
            ],
            images: {
                fields: {
                    file: {
                        url: drug14
                    }
                }
            }
        }
    },
    {
        sys: {
            id: "15"
        },
        fields: {
            name: "promethazine",
            slug: "promethazine",
            type: "antiemetic",
            company: "phenergan",
            price: 65.43,
            packets: 250,
            count: 0,
            total: 0,
            inCart: false,
            featured: false,
            description:
            "Ibuprofen (IBP) is a propionic acid derivative. Comparable to aspirin (ASA) in its analgesic action, but higher doses are required for anti-inflammatory effect. It has been reported to have less GI symptoms than aspirin in equal-effective doses. Cross-sensitivity with ASA and other NSAIDs has been reported. IBP inhibits platelet aggregation and prolongs bleeding time, but does not affect prothrombin or whole blood clotting times.",
            uses: [
                "prevent and treat nausea and vomiting",
                "for fever"
            ],
            sideEffects: [
                "drowsiness",
                "dizziness",
                "dry mouth",
                "blurred vision"
            ],
            application: [
                "by mouth",
                "by injection"
            ],
            precaution: [
                "may make you sensitive to sun",
                "may make you sweat less",
                "slowed breathing for children"
            ],
            dosage: [
                "as directed by physician"
            ],
            images: {
                fields: {
                    file: {
                        url: drug15
                    }
                }
            }
        }
    },
    {
        sys: {
            id: "16"
        },
        fields: {
            name: "pyridoxine (Vitamin B6)",
            slug: "pyridoxine-hcl",
            type: "antiemetic",
            company: "neuro-k",
            price: 126.65,
            packets: 150,
            count: 0,
            total: 0,
            inCart: false,
            featured: false,
            description:
            "Diclofenac sodium (Figure 4) is an acetic acid derivative. It has analgesic, antipyretic, and anti-inflammatory properties. At therapeutic doses it has little effect on platelet aggregation. Patients not responding to IBP can be given diclofenac instead. Do not coadminister with other NSAIDs or salicylates.",
            uses: [
                "prevent low levels of vitamin B6",
                "prevent certain nerve disorder"
            ],
            sideEffects: [
                "sensory nerve disorder",
                "feeling of pins and needles on skin",
                "headache"
            ],
            application: [
                "by mouth"
            ],
            precaution: [
                " side effects in large doses"
            ],
            dosage: [
                "once daily"
            ],
            images: {
                fields: {
                    file: {
                        url: drug16
                    }
                }
            }
        }
    }
]