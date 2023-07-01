
const tBody = document.getElementById("body_one")

getData()


async function getData() {
    const url = "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
    const promise = await fetch(url);
    const municipality_json = await promise.json();

    console.log(municipality_json);

    
    const mun = municipality_json.dataset.dimension.Alue.category.label;
    const pop = municipality_json.dataset.value;

    console.log(mun);
    console.log(pop);

    pop.forEach((label, index) => {
        let tr = document.createElement("tr");
        let td_mun = document.createElement("td");
        let td_pop = document.createElement("td");
      
        td_mun.innerText = mun[index];
        td_pop.innerText = label;
      
        tr.appendChild(td_mun);
        tr.appendChild(td_pop);
        tBody.appendChild(tr);
      });
}
