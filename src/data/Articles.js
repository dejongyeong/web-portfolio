import uuid from 'react-uuid';

export const publications = [
  {
    key: uuid(),
    title:
      'Autonomous Driving Architectures, Perception and Data Fusion: A review',
    author: 'Dr. Gustavo Velasco-Hernandez',
    coAuthor: 'De Jong Yeong, Dr. John Barry, Prof. Joseph Walsh',
    conference:
      'IEEE 16th International Conference on Intelligent Computer Communication and Processing (ICCP)',
    location: 'Cluj-Napoca, Romania',
    date: '2020',
    status: 'In Press',
    abstract: `Over the last 10 years, huge advances
    have been made in the areas of sensor technologies and
    processing platforms, pushing forward developments in the field
    of autonomous vehicles, mostly represented by self-driving cars.
    However, the complexity of these systems has been also increased
    in terms of the hardware and software within them, especially
    for the perception stage in which the goal is to create a
    reliable representation of the vehicle and the world. In order
    to manage this complexity, several architectural models have
    been proposed as guidelines to design, develop, operate and
    deploy self-driving solutions for real applications. In this
    work, a review on autonomous driving architectures is presented,
    classifying them into technical or functional architectures
    depending on the domain of their definition. In addition, the
    perception stage of self-driving solutions is analysed as a
    component of the architectures, detailing into the sensing part
    and how data fusion is used to perform localisation, mapping and
    object detection. Finally, the paper is concluded with
    additional thoughts on the actual status and future trends in
    the field.`,
    links: `https://www.researchgate.net/publication/344173222_Autonomous_Driving_Architectures_Perception_and_Data_Fusion_A_review?_sg=ssnM6_l50jyj-fs_wNsSvUpoM_ppmo44ZHKlNN3k2Z1vLF4yE4BjiNebEOS0MP6gfocQ2NhRdZENQUMkzvLYzjQBC4RCKujpmuJDVrhw.LS7bbO5HkS5mO-5y1-EBR60GexHj9Wlm-w_a_amDWcmYUpX6YibybEsvwT3cm8OmKagHaXHtHz-4FEU7irbsOA`,
  },
  {
    key: uuid(),
    title:
      'A Review of Multi-Sensor Fusion System for Large Heavy Vehicles Off Road in Industrial Environments.',
    author: 'De Jong Yeong',
    coAuthor: 'Dr. John Barry, Prof. Joseph Walsh',
    conference: '31st Irish Signals and Systems Conference (ISSC)',
    location: 'Ireland',
    date: '2020',
    status: 'Published',
    abstract: `Industry 4.0 or fourth industrial revolution elevates the computerization of Industry 3.0 and enhances it with smart and autonomous systems driven by data and Machine Learning. This paper reviews the advantages and disadvantages of sensors and the architecture of multi-sensor setup for object detection. Here we consider the case of autonomous systems in for large heavy vehicles off-road in industrial environments with the use of camera sensor, LiDAR sensor, and radar sensor. Understanding the vehicles surroundings is a vital task in autonomous operation where personnel and other obstacles present significant hazard of collision. This paper review further discusses the challenges of time synchronisation on sensor data acquisition in multi-modal sensor fusion for personnel and object detection, and details a solution implemented in a Python environment.`,
    links:
      'https://www.researchgate.net/publication/344173818_A_Review_of_Multi-Sensor_Fusion_System_for_Large_Heavy_Vehicles_Off_Road_in_Industrial_Environments?_sg=0bUP7dvoF059jElYtJmRfqe1VJhi4SuY8I6sA_ysTigJRcYY0rSIU3OvvBhfk7qcP9hG68c2Ct9ltt_RcXLcO4P9WU6cgZiFEAuUrpK9.MoidfoNd-LfrovazZ-yhTAK5X6Rys7Y9EzB_iy5sbil8vvX8gXLHBmjuOQMzkK2ljSmkdvtk2CRLL37D9UZ8uQ',
  },
];
