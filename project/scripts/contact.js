// Create contact information options
const infoType = document.getElementById('infoType');
const infos = [
    {
      id: '1',
      name: "Penggh tourism",
      
    },
    {
      id: '2',
      name: "Penghu geology",
      averagerating: 4.7
    },
    {
      id: '3',
      name: "Penghu culture",
      averagerating: 3.5
    },
    {
      id: '4',
      name: "Penghu package itinerary",
      averagerating: 3.9
    },
    {
      id: '5',
      name: "Penghu attractions",
      averagerating: 5.0
    }
  ];

infos.forEach(item => {
    const option = document.createElement('option');
    option.value = item.id;
    option.textContent = item.name;
    infoType.appendChild(option);
});