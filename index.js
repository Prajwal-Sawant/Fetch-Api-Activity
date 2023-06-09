
    fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817").then(
  res => {
    res.json().then(
      data => {
     console.log(data)
     const response1 = data;
     const dataArray = response1.data;
        console.log(dataArray); 
        if (dataArray.length > 0) {

          var temp = "";
          dataArray.forEach((itemData) => {
            console.log(itemData.name)
            temp += "<tr>";
            temp += "<td>" + itemData.name + "</td>";
            temp += "<td>" + itemData.office + "</td>";
            temp += "<td>" + itemData.position + "</td>";
            temp += "<td>" + itemData.salary + "</td>";
            temp += "</tr>";
          });
          document.getElementById('data').innerHTML = temp;
        }
      }
    )
  }
)

