// const fs = require('fs');
// const filePath = '../files/hometownHero.csv'
// fs.readFile(filePath, 'utf8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });
const data = [
    {
            name: {
              title: "Mr",
              first: "Private Ramon",
              last: "Espinosa Jr",
            },
            bio: "Private Ramon Espinosa Jr. was born on October 15, 1923, in East Los Angeles, California. His family relocated to El Paso, Texas, during his youth, with a brief period spent across the border in Ciudad Juarez. Drafted into the US Army on June 6, 1942, at 18, he joined the 1st Calvary Division stationed at Ft. Bliss. In early 1943, he was deployed to the Philippines via ship to aid in the liberation from Japanese forces during World War II. Following his military service, he settled in El Paso, where he built a family and recently celebrated his 100th birthday, surrounded by loved ones.",
            picture: {
              thumbnail: "../images/ramon.jpg",
            },
          },
          {
            name: {
                title: "Dr",
                first: "Dr. Jennifer Rachel",
                last: "George",
              },
              bio: "A board-certified General and Abdominal Transplant surgeon. Originally from New Jersey, she chose El Paso for her training and is now a crucial part of the team at the Las Palmas Kidney Transplant Center. Driven by a passion for increasing access to life-saving transplants, she's a proud advocate for organ donation in our community.",
              picture: {
                thumbnail: "../images/jennifer.jpg",
              },
            },
            {
                name: {
                    title: "Mr",
                    first: "Jonathan",
                    last: "Killings",
                  },
                  bio: "Jonathan Killings, appointed Fire Chief for the El Paso Fire Department in December 2022, has been a dedicated firefighter since August 1998. With a Bachelor of Science in Management from the University of Phoenix and a Master of Public Administration from Sam Houston State University, he's also a Licensed EMT Paramedic since 2009. Chief Killings has excelled in various roles, including Battalion Chief, Emergency Operations, and Urban Search and Rescue, showcasing exceptional leadership and earning respect throughout the department.",
                  picture: {
                    thumbnail: "../images/jonathon.jpg",
                  },
            },
            {
                name: {
                    title: "Ms",
                    first: "Karla",
                    last: "Mariscal",
                  },
                  bio: "Karla Mariscal, the dynamic news anchor for Noticiero Telemundo 48 in El Paso, Texas. Specializing in political and educational coverage, she's been a trusted face on Telemundo 48 since 2014. With a journalism career spanning many years, Karla has garnered awards, including Lone Star EMMY nominations and awards for Best News Anchor in Texas. A Communication Sciences graduate from the Autonomous University of Chihuahua, she's not only an accomplished journalist but also dedicated to promoting education in the Hispanic community in El Paso, Tx.",
                  picture: {
                    thumbnail: "../images/karla.jpg",
                  },
            },
            {
                name: {
                    title: "Mr",
                    first: "Alexandre",
                    last: "Choiniere",
                  },
                  bio: "Enlisting in 2010, he faced the frontlines with unwavering courage, surviving firefights and four IED blasts during two tours in Afghanistan. Recognized with the Army Commendation Medal for saving a fellow soldier, he also showcased exceptional innovation as a Master Fitness trainer and conceived the 'Clean Room' concept for helicopter repairs, protecting soldiers from harmful exposure. After 13 years of dedicated service, SSG Choiniere's legacy of bravery and ingenuity continues to inspire",
                  picture: {
                    thumbnail: "../images/alexandre.jpg",
                  },
                },
                {
                    name: {
                        title: "Mr",
                        first: "David",
                        last: "Sublasky",
                      },
                      bio: "A beacon of leadership securing positive change. As Treasurer for the Fabens Alumni Association and a key figure in the Veterans Park Committee, he's dedicated to community service, scholarship fundraising, and educational initiatives. His impact is felt at the David Sublasky Headstart in Fabens. Beyond administrative roles, he generously volunteers at Fabens Forgotten Cemetery, organizes the annual Veterans Day Ceremony, and warms hearts as Santa for Jerry Salvio's Secret Santa gifts and tennis shoe distribution.",
                      picture: {
                        thumbnail: "../images/david.jpg",
                      },
                    },
                    {
                        name: {
                            title: "Mr",
                            first: "Don",
                            last: "Scott",
                          },
                          bio: "a distinguished 26-year military veteran with a remarkable journey marked by dedication and achievements. From Operation Iraqi Freedom/Operation Enduring Freedom to key roles in the Navy and Army, including Chief Warrant Officer 3, Donâ€™s extensive qualifications include being a Jumpmaster and Combat Diver. In civilian life, heâ€™s a Senior Project Manager and co-owner of Modus Inc, manufacturing housing units for federal contracts. Married to Yvonne Zarate, heâ€™s a proud father of three, including twins with autismâ€”inspiring personal growth. Donâ€™s commitment to community service is evident through initiatives like the Willie Cager Scholarship/Endowment.",
                          picture: {
                            thumbnail: "../images/don.jpg",
                          },
                    },
                    {
                        name: {
                            title: "Mr and Mrs",
                            first: "Lilia Perales",
                            last: "and Mikko Lee",
                          },
                          bio: "Certified Athletic Trainers at EPISD Bowie High School, bring over two decades of expertise to Sports Medicine. Specializing in comprehensive care for student athletes, they cover injury prevention, examination, diagnosis, treatment, and rehabilitation. Recognized by the AMA and HH, their dedication goes beyond the high school level, advocating for the vital role Athletic Trainers play in saving lives. On September 8th, 2023, they responded promptly to a medical emergency during a football game, providing life-saving care.",
                          picture: {
                            thumbnail: "../images/liliaAndMikko.jpg",
                          },
                    },
                    {
                        name: {
                            title: "Ms",
                            first: "Donna",
                            last: "Juarez",
                          },
                          bio: "Donna Juarez, originally from Houston, Texas, pursued a dedicated military career before settling in El Paso in 1998. As the Director of the STAR Military Veteran Treatment Program at Rio Vista Behavioral Health, she's spent 16 years supporting wounded military and veteran heroes, focusing on PTSD, MST, and substance abuse treatment. Named the first female veteran of 2023, Donna spearheads impactful initiatives, including the \"We Care Project,\" uniting 50 veteran service organizations to provide meals for over 250 Veterans and National Guard soldiers. She also chairs the Cityâ€™s Veterans Affairs Advisory Committee, playing a vital role in advocating for the mental health of the military and veteran community.",
                          picture: {
                            thumbnail: "../images/donna.jpg",
                          },
                    },
                    {
                        name: {
                            title: "Mr",
                            first: "Anselmo",
                            last: "Gomez",
                          },
                          bio: "a distinguished individual with a remarkable legacy of service. A Vietnam War veteran with 23 years in the US Air Force and an additional 17 years dedicated to the Socorro Independent School District (SISD), heâ€™s left a lasting impact on both colleagues and the community. During his military tenure, he not only fulfilled regular duties but also taught leadership concepts to newly promoted sergeants. His commitment extended to community service, notably in Hawaii and the Netherlands (Holland), where he volunteered for various initiatives, including coaching girlsâ€™ softball. Retiring from the military in August 2006, he seamlessly transitioned to SISD as a Parent Liaison, teaching classes and coordinating after-school sports programs. Anselmo Gomezâ€™s legacy is one of selfless service and dedication to both education and community betterment.",
                          picture: {
                            thumbnail: "../images/anselmo.jpg",
                          },
                    },
                    {
                        name: {
                            title: "Mr",
                            first: "Carlos",
                            last: "Sanchez",
                          },
                          bio: "Carlos Sanchez, an award-winning news anchor for Telemundo 48 El Paso, has dedicated 23 years to covering stories along the Texas-Mexico border. With 17 Lone Star Emmy Awards under his belt, he's a seasoned journalist who has reported on significant events like presidential elections, the August 3rd tragedy in El Paso, and natural disasters such as Hurricane Harvey and the 2017 Mexico City earthquake. Beyond his career achievements, Sanchez is passionate about serving the Hispanic/Latino community in El Paso and actively volunteers at schools, organizations, and institutions.",
                          picture: {
                            thumbnail: "../images/carlos.jpg",
                          },
                    },
                    {
                        name: {
                            title: "Ms",
                            first: "Manuelita",
                            last: "Yanez",
                          },
                          bio: "Ms. Manuelita Yanez, known affectionately as Ms. Nelly, is a dedicated Riverside High School graduate and an integral part of the Riverside Community. With over 35 years of service at YISD, including 15 years serving Riverside, she embodies commitment and community spirit. Ms. Yanez has received multiple awards for her outstanding service, including the Service Excellence Award and the Superintendent’s Service Excellence Award. She’s renowned for her efforts in organizing turkey donations and campus-wide canned food drives, benefiting countless families in need. Additionally, her active involvement in the Riverside High School Alumni Association and sporting fundraisers highlights her dedication to supporting Riverside High School students through scholarships and athletic endeavors.",
                          picture: {
                            thumbnail: "../images/mauelita.jpg",
                          },
                    },
                    {
                      name: {
                          title: "Mr",
                          first: "Captain Xavier",
                          last: "T. Mosley",
                        },
                        bio: "Originally from Pennsylvania, Captain Mosley began his military journey with the Pennsylvania Army National Guard in 2010. After graduating from the University of Toledo, he transitioned to officer status, serving in various leadership roles. Currently, he serves as Troop Commander with the 6th Squadron, 1st Cavalry Regiment at Fort Bliss, Texas. Captain Mosley's remarkable intervention to save a fellow soldier's life during a critical situation in El Paso, highlights the importance of supporting one another in times of need. His decorated career includes prestigious awards like the Meritorious Service Medal and Army Commendation Medal. Thank you for your service and the impact you've made in our nation and our community!",
                        picture: {
                          thumbnail: "../images/xavier.jpg",
                        },
                  },
                    
];
