import propertyThumbnail from '../assets/images/propertyCardImage.webp';

export const PropertyCardData = {
  thumbnail: propertyThumbnail,
  price: 45145,
  address: "4324 89th St North, Atlanta, GA, 33615.",
  timestamp: "May 03 2021",
  details: {
    rooms: 3,
    bath: 2.5,
    sqft: 1050,
    type: "Condo"
  }
}

export const PropertyCardDocumentation = {
  title: "Property Card Component",
  tag: "<PropertyCard {...props} />",
  description: "Avatars are found throughout material design with uses in everything from tables to dialog menus.",
  properties: {
    thumbnail: {
      type: "string",
      desc: "An image to show in the component."
    },
    price: {
      type: "number",
      desc: "Price of the property."
    },
    address: {
      type: "string",
      desc: "Address for the property."
    },
    timestamp: {
      type: "string",
      desc: "Time when the property was posted on the site."
    },
    details: {
      type: "object",
      desc: "An object containing the data for the rooms, bath, sqft and type of property posted."
    },
  }
}