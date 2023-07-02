
const tBody = document.getElementById("body_one")

getData()


async function getData() {
    const url = "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
    const promise = await fetch(url);
    const municipality_json = await promise.json();

    const url2 = "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";
    const promise2 = await fetch(url2);
    const employment_json = await promise2.json();
    var n = 0

    console.log(municipality_json);

    
    var mun = municipality_json.dataset.dimension.Alue.category.label;
    var pop = municipality_json.dataset.value;
    var emp = employment_json.dataset.value

    console.log(mun["SSS"]);
    console.log(pop);

    for (let x in mun) {
      let tr = document.createElement("tr");
      let td_mun = document.createElement("td");
      let td_pop = document.createElement("td");
      let td_emp = document.createElement("td");
      let td_pre = document.createElement("td");
      
      td_mun.innerText = mun[x];
      td_pop.innerText = pop[n];
      td_emp.innerText = emp[n];
      td_pre.innerText = average(pop[n],emp[n]);

      if (average(pop[n],emp[n]) > 45) {
        tr.className = "green"
      }

      if (average(pop[n],emp[n]) < 23) {
        tr.className = "red"
      }
      
      tr.appendChild(td_mun);
      tr.appendChild(td_pop);
      tr.appendChild(td_emp);
      tr.appendChild(td_pre);
      tBody.appendChild(tr);
      n++
    }
    /*
    pop.forEach((label, index) => {
        let tr = document.createElement("tr");
        let td_mun = document.createElement("td");
        let td_pop = document.createElement("td");
      
        td_mun.innerText = mun[index];
        td_pop.innerText = label;
      
        tr.appendChild(td_mun);
        tr.appendChild(td_pop);
        tBody.appendChild(tr);
      });*/
}

function average(pop, emp) {
  return ((emp/pop*100)).toFixed(2)
}
