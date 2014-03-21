var dummydata = 
{
	"huis1388":
		{	itemId:"huis1388",
            itemUrl:"http://www.covershousing.com/property/1388/achter-clarenburg/",
            itemDescription:"Achter Clarenburg",
            itemImageUrl:"http://www.covershousing.com/images_huis/1/1388-DSC04973.JPG",
            itemPrice:"€ 1.275,00",
            itemCity:"Utrecht",
            itemArea:"City Center",
            itemFurnishing:"Furnished",
            itemBedrooms:"1",
            itemSize:"70 m2"
		}
    ,
	"huis1379":
        {	itemId:"huis1379",
            itemUrl:"http://www.covershousing.com/property/1379/ambachtstraat/",
            itemDescription:"Ambachtstraat",
            itemImageUrl:"http://www.covershousing.com/images_huis/1/1379-IMG_1089.jpeg",
            itemPrice:"€ 1.200,00",
            itemCity:"Utrecht",
            itemArea:"Museumquarter",
            itemFurnishing:"Furnished",
            itemBedrooms:"2",
            itemSize:"65 m2"
        }
    ,
    "huis1376":
        {	itemId:"huis1376",
            itemUrl:"http://www.covershousing.com/property/1376/hollandse-toren/",
            itemDescription:"Hollandse Toren",
            itemImageUrl:"http://www.covershousing.com/images_huis/1/1376-zijaanzicht.jpg",
            itemPrice:"€ 1.075,00",
            itemCity:"Utrecht",
            itemArea:"City Center",
            itemFurnishing:"Semi-Furnished",
            itemBedrooms:"1",
            itemSize:"63 m2"
        }
    ,
    "huis1080":
        {	itemId:"huis1080",
            itemUrl:"http://www.covershousing.com/property/1080/mariaplaats/",
            itemDescription:"Mariaplaats",
            itemImageUrl:"http://www.covershousing.com/images_huis/1/1080-IMG_4271.jpg",
            itemPrice:"€ 3.450,00",
            itemCity:"Utrecht",
            itemArea:"City Center",
            itemFurnishing:"Furnished",
            itemBedrooms:"2",
            itemSize:"200 m2"
        }
    ,
    "huis1282":
        {	itemId:"huis1282",
            itemUrl:"http://www.covershousing.com/property/1282/nieuwegracht/",
            itemDescription:"Nieuwegracht",
            itemImageUrl:"http://www.covershousing.com/images_huis/1/1282-18.jpg",
            itemPrice:"€ 1.495,00",
            itemCity:"Utrecht",
            itemArea:"Museumquarter",
            itemFurnishing:"Furnished",
            itemBedrooms:"1",
            itemSize:"95 m2"
        }
}


var itemHTML = '<a href="$itemLink" class="huis" id="$itemID"> \
    <img src="$imageSrc" alt="$imageAlt" width=120 height=160 class="huisimage"/> \
        <span class="info"> \
            <span class="propertyname">$propertyName</span> \
            <span class="price">$price</span> \
            <span class="streetname">$streetName</span> \
            <span class="infolabel">City:</span> \
            <span class="infocontent">$city</span> \
            <span class="infolabel">Area:</span> \
            <span class="infocontent">$area</span> \
            <span class="infolabel">Furnishing:</span> \
            <span class="infocontent">$furnishing</span> \
            <span class="infolabel">Bedrooms:</span> \
            <span class="infocontent">$bedrooms</span> \
            <span class="infolabel">Size:</span> \
            <span class="infocontent">$size</span> \
            <span class="infolabel">id:</span> \
            <span class="infocontent">$id</span> \
        </span> \
        </a>';