import React from 'react';
import { BsBuilding } from 'react-icons/bs';
import { FaRegBuilding, FaSchool, FaToolbox, FaHome } from 'react-icons/fa';
import { GiFactory } from 'react-icons/gi';
import { AiOutlineBank, AiFillBug, AiOutlineGroup } from 'react-icons/ai';
import { RiHotelBedLine } from 'react-icons/ri';
import { IoMdRestaurant } from 'react-icons/io';

const data = [
  {
    index: 1,
    title: 'Office Cleaning',
    icon: (<BsBuilding />),
    description: `From the boardroom to the bathroom, the overall cleanliness of your office plays an important role in the productivity of your workers, job satisfaction, \
    and the impression you give to your clients and visitors.`,
    content: (<div className="content">
      <p>
        From the boardroom to the bathroom, the overall cleanliness of your office plays an important role in the productivity of your workers, job satisfaction, and the impression you give to your clients and visitors. By implementing office janitorial services, you can help create a cleaner and more welcoming environment for your employees and guests. With professional office cleaning, you’ll be helping to reduce the impact of absenteeism and sick days on your business, providing a healthier workplace that is home to fewer harmful bacteria and viruses.
      </p>
      <h5>
        Our comprehensive commercial office cleaning services include:
      </h5>
      <ul>
        <li>Complete floor care for both carpets and hard floor surfaces</li>
        <li>Effective sanitization of restroom and kitchen spaces</li>
        <li>Dust and dirt removal</li>
        <li>Wall and window cleaning services</li>
        <li>Thorough cleaning of meeting rooms, cubicles and hallways</li>
      </ul>
      <p>And much more!</p>
    </div>)
  },
  {
    index: 2,
    title: 'Commercial Cleaning',
    icon: <AiOutlineBank />,
    description: `When it comes to your commercial business, we understand the importance of presenting a professional, tidy and clean appearance to your customers and clients. \
    Choosing the best commercial cleaners is essential to delivering quality services and maintaining a good reputation for your company.`,
    content: (<div className="content">
      <p>When it comes to your commercial business, we understand the importance of presenting a professional, tidy and clean appearance to your customers and clients. Choosing the best commercial cleaners is essential to delivering quality services and maintaining a good reputation for your company.</p>
      <p>However, it can be difficult to find a commercial cleaning company that is both trustworthy and affordable. At SpectacleClean & Fumigation Services, our unique processes allow us to deliver outstanding commercial janitorial services at the right price for our customers. Whether you own a small, local shop or a business with multiple locations all over the country, we can design a cleaning schedule that meets your needs.</p>
      <h5>We offer a broad range of effective commercial cleaning services, including:</h5>
      <ul>
        <li>Removal of dirt, dust and debris from your commercial space</li>
        <li>Advanced disinfection of all surfaces using our industry-leading cleaning technology</li>
        <li>Complete carpet cleaning services</li>
        <li>Upholstery cleaning services</li>
        <li>Hard floor cleaning, including stripping, waxing and buffing</li>
      </ul>
    </div>),
  },
  {
    index: 3,
    title: 'Industrial Cleaning',
    icon: <GiFactory />,
    description: `SpectacleClean is pleased to offer unparalleled industrial cleaning services to warehouses, 
    manufacturing facilities and other industrial buildings both large and small. In industrial scenarios, safety is of top concern. 
    `,
    content: (<div className="content">
      <p>SpectacleClean is pleased to offer unparalleled industrial cleaning services to warehouses, manufacturing facilities and other industrial buildings both large and small. In industrial scenarios, safety is of top concern. That’s why we offer cleaning services that can be tracked and checked to ensure we achieve our high standard of cleanliness every time we clean. Like our customers in the industrial space, we are consistently monitoring our performance and making adjustments to achieve the highest levels of quality and efficiency.</p>
      <p>A part from other industrial cleaning companies. We’ll begin your contract with a first impressions survey to check every aspect of your facility and determine where to focus our attention. In regular intervals, we will inspect your building and measure our cleanliness levels to ensure SpectacleClean’s standards are being met, and you are 100% satisfied with our industrial cleaning service.</p>
      <p>Our Industrial Cleaning Services</p>
      <p>Your industrial cleaning schedule can incorporate a wide range of services to meet your unique requirements. Whether you need daily, weekly or bi-weekly cleanings, we’ll design a schedule that keeps your industrial facility looking and operating at its best.</p>
      <h5>Your chosen industrial janitorial services may include:</h5>
      <ul>
        <li>Complete carpet and hard floor surface care</li>
        <li>Stripping, waxing, buffing or sealing of floors</li>
        <li>Sanitization of surfaces and equipment using hospital-grade disinfectants</li>
        <li>Removal of dirt, debris and dust</li>
        <li>Specialty cleaning services on a monthly, seasonal or yearly basis</li>
      </ul>
    </div>)
  },
  {
    index: 4,
    title: 'Hospitality Cleaning',
    icon: <FaToolbox />,
    description: `In the hospitality industry, clean spaces are essential to the success of your operations. A professionally clean venue not only allows you to present a welcoming atmosphere for your guests, but also makes them feel comfortable and improves their overall satisfaction with your property and your services.`,
    content: (<div className="content">
      <p>In the hospitality industry, clean spaces are essential to the success of your operations. A professionally clean venue not only allows you to present a welcoming atmosphere for your guests, but also makes them feel comfortable and improves their overall satisfaction with your property and your services. A clean facility can keep customers returning year after year, and helps promote word of mouth recommendations for your hospitality business. This is why it is absolutely critical to choose reliable and professional cleaners who can help you achieve your high standards of cleanliness.</p>
      <p>We’re proud to offer flexible cleaning services for a wide range of businesses in the hospitality industry. Whether you operate a hotel, inn, bed and breakfast, event venue or conference centre, you can depend on us to deliver superior cleaning services each and every time we visit.</p>
    </div>)
  },
  {
    index: 5,
    title: 'Hotel Housekeeping',
    icon: <RiHotelBedLine />,
    description: `If you are searching for the right hotel cleaning services, look no further than SpectacleClean. We strive to provide tailored cleaning services and schedules that meet the unique needs of your hotel.`,
    content: (<div className="content">
      <p>If you are searching for the right hotel cleaning services, look no further than SpectacleClean. We strive to provide tailored cleaning services and schedules that meet the unique needs of your hotel. Should you require frequent housekeeping services, or would like additional assistance for your existing staff, spectacleClean can provide exactly the cleaning services you need.</p>
      <p>We offer a broad range of cleaning services that includes upkeep of your lobby, kitchen areas, guest rooms, conference rooms, washrooms and other common spaces within your facility.</p>
    </div>)
  },
  {
    index: 6,
    title: 'Apartment & Condo Building Cleaning',
    icon: <FaRegBuilding />,
    description: `Condominium building and apartment complex cleaning presents a unique challenge for property managers. These types of residential buildings combine both private and common living spaces that must be taken care of.`,
    content: (<div className="content">
      <p>Condominium building and apartment complex cleaning presents a unique challenge for property managers. These types of residential buildings combine both private and common living spaces that must be taken care of. While individual condo owners are responsible for the maintenance of their own spaces, the common areas within the building must be cleaned to a high standard to ensure they remain clean, safe and attractive for residents and visitors.</p>
      <p>At SpectacleClean, we understand that the approach to condo building cleaning services is different from other types of commercial cleaning. Building managers require cleaning services that adapt to their changing needs and who can work to discreetly clean all common spaces. All of our friendly cleaning crews are also uniformed and display an ID badge so you can feel confident in your choice of cleaning services.</p>
    </div>)
  },
  {
    index: 7,
    title: 'Pub & Restaurant Cleaning',
    icon: <IoMdRestaurant />,
    description: `Restaurant janitorial services are a key component of maintaining a professional, welcoming environment for your diners. 
    A clean restaurant not only looks great – it allows you to deliver delicious meals to your customers while maintaining high levels of food safety.`,
    content: (<div className="content">
      <p>Restaurant janitorial services are a key component of maintaining a professional, welcoming environment for your diners. A clean restaurant not only looks great – it allows you to deliver delicious meals to your customers while maintaining high levels of food safety. A clean restaurant is a healthier restaurant, and professional restaurant cleaning services can help you meet all required standards for cleanliness.</p>
      <p>Our restaurant cleaning services can include complete maintenance of your entire facility, including areas in both front and back of house:</p>
      <ul>
        <li>Thorough cleaning of carpets and hard floor surfaces</li>
        <li>Disinfection of tables, chairs and other dining surfaces</li>
        <li>Professional cleaning of lobby and waiting areas</li>
        <li>Deep cleaning and sanitization of all kitchen and food preparation areas</li>
      </ul>
    </div>)
  },
  {
    index: 8,
    title: 'School & Montessori Cleaning',
    icon: <FaSchool />,
    description: `Professional school janitorial services are the solution to ensure your educational facility maintains a high level of cleanliness and minimizes the impact of harmful bacteria and viruses.`,
    content: (<div className="content">
      <p>Every day, educational facilities can see thousands of staff and students moving throughout their halls and classrooms, making them breeding grounds for bacteria and viruses. If your facility is not properly cleaned and maintained, children, visitors and teachers can become ill and germs can spread quickly throughout classes.</p>
      <p>Professional school janitorial services are the solution to ensure your educational facility maintains a high level of cleanliness and minimizes the impact of harmful bacteria and viruses. Not only will school cleaning services prevent the spread of illness – they will also help you create a great first impression on prospective students and their parents. The cleanliness of your facility can be the first impression that makes or breaks your potential customers’ decision to bring their child to your school, daycare or Montessori establishment.</p>
    </div>)
  },
  {
    index: 9,
    title: 'Post Construction Cleaning',
    icon: <FaHome />,
    description: `
    Dusting Air Diffusers. Cleaning Lights. Damp cleaning restroom fixtures. Spot cleaning interior glass. Vacuuming and spot treating carpets.
    `,
    content: (<div className="content">
      <h5>Our post-construction clean-up services consist of:</h5>
      <ul>
        <li>Dusting Air Diffusers</li>
        <li>Cleaning Lights</li>
        <li>Damp cleaning restroom fixtures</li>
        <li>Spot cleaning interior glass</li>
        <li>Vacuuming and spot treating carpets</li>
        <li>Damp mopping hard-surface floors</li>
      </ul>
    </div>)
  },
]

export default data;