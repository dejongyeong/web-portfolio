import uuid from 'react-uuid';

export const publications = [
  {
    key: uuid(),
    title: 'Data Pre-Processing Methods to Enable Operational Metrics Calculations for Heavy Machinery',
    author: 'Sharsad Karakuni',
    coAuthor: 'John Barry, De Jong Yeong, Joseph Walsh',
    conference: 'TO BE UPDATED',
    location: 'TO BE UPDATED',
    date: '2021',
    status: 'In Press',
    abstract: `Automated or autonomous machines are increasingly commonplace across multiple industry sectors 
    and many of these incorporate systems for recording operational data. For example, supervisory control and 
    data acquisition (SCADA) systems may record a majority or all controller input-output data on a continual 
    basis while the machine is operating. While this data may be employed for retrospectively investigating or 
    de-bugging machine operation, it may also be the basis for determining operational metrics which serve to 
    conveniently inform operations teams and design engineers in terms of operational efficiency and new machine 
    development, respectively. Operational metrics may also be employed for labelling training data to be used in 
    machine learning based systems. This paper outlines the methods employed for analysing piecewise, often-discontinuous 
    time series data containing various types of errors and noise. We describe both a range of methods employed for data 
    preparation and filtering to support the calculation of a range of operational metrics for heavy industrial machinery. 
    The proposed metrics include those relating to energy consumption, and productivity and these may also be generalised to 
    a wide range of electro-mechanical machinery.`,
    links: `https://www.researchgate.net/publication/354551863_Data_Pre-Processing_Methods_to_Enable_Operational_Metrics_Calculations_for_Heavy_Machinery`,
    type: 'conference',
  },
  {
    key: uuid(),
    title: 'Sensor and Sensor Fusion Technology in Autonomous Vehicles: A Review',
    author: 'De Jong Yeong',
    coAuthor: 'John Barry, Joseph Walsh',
    conference: 'MDPI Sensors Journal',
    location: '-',
    date: '2021',
    status: 'Published',
    abstract: `With the significant advancement of sensor and communication technology and 
    the reliable application of obstacle detection techniques and algorithms, automated 
    driving is becoming a pivotal technology that can revolutionize the future of 
    transportation and mobility. Sensors are fundamental to the perception of vehicle 
    surroundings in an automated driving system, and the use and performance of multiple 
    integrated sensors can directly determine the safety and feasibility of automated driving 
    vehicles. Sensor calibration is the foundation block of any autonomous system and its 
    constituent sensors and must be performed correctly before sensor fusion and obstacle 
    detection processes may be implemented. This paper evaluates the capabilities and the 
    technical performance of sensors which are commonly employed in autonomous vehicles, 
    primarily focusing on a large selection of vision cameras, LiDAR sensors, and radar 
    sensors and the various conditions in which such sensors may operate in practice. We 
    present an overview of the three primary categories of sensor calibration and review 
    existing open-source calibration packages for multi-sensor calibration and their 
    compatibility with numerous commercial sensors. We also summarize the three main 
    approaches to sensor fusion and review current state-of-the-art multi-sensor fusion 
    techniques and algorithms for object detection in autonomous driving applications. The 
    current paper, therefore, provides an end-to-end review of the hardware and software 
    methods required for sensor fusion object detection. We conclude by highlighting some of 
    the challenges in the sensor fusion field and propose possible future research directions 
    for automated driving systems.`,
    links: `https://www.mdpi.com/1424-8220/21/6/2140`,
    type: 'journal',
  },
  {
    key: uuid(),
    title:
      'Autonomous Driving Architectures, Perception and Data Fusion: A review',
    author: 'Gustavo Velasco-Hernandez',
    coAuthor: 'De Jong Yeong, John Barry, Joseph Walsh',
    conference:
      'IEEE 16th International Conference on Intelligent Computer Communication and Processing (ICCP)',
    location: 'Cluj-Napoca, Romania',
    date: '2020',
    status: 'Published',
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
    links: `https://ieeexplore.ieee.org/document/9266268`,
    type: 'conference',
  },
  {
    key: uuid(),
    title:
      'A Review of Multi-Sensor Fusion System for Large Heavy Vehicles Off Road in Industrial Environments.',
    author: 'De Jong Yeong',
    coAuthor: 'John Barry, Joseph Walsh',
    conference: '31st Irish Signals and Systems Conference (ISSC)',
    location: 'Ireland',
    date: '2020',
    status: 'Published',
    abstract: `Industry 4.0 or fourth industrial revolution elevates the computerization of Industry 3.0 and enhances it with smart and autonomous systems driven by data and Machine Learning. This paper reviews the advantages and disadvantages of sensors and the architecture of multi-sensor setup for object detection. Here we consider the case of autonomous systems in for large heavy vehicles off-road in industrial environments with the use of camera sensor, LiDAR sensor, and radar sensor. Understanding the vehicles surroundings is a vital task in autonomous operation where personnel and other obstacles present significant hazard of collision. This paper review further discusses the challenges of time synchronisation on sensor data acquisition in multi-modal sensor fusion for personnel and object detection, and details a solution implemented in a Python environment.`,
    links: 'https://ieeexplore.ieee.org/document/9180186',
    type: 'conference',
  },
];
