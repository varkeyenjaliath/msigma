const response=fetch("https://api.msigma.in/btech/v2/branches/");
console.log(response);
response
.then(data=>data.json())
.then((data)=>{
    console.log(data.branches)
    for(let i=0;i<3;i=i+2){
        let mainSection=document.getElementById("wrapper");
        let row=document.createElement('div');
        for(let j=i;j<i+2;j++){
            let k=parseInt(Math.random()*5);
            row.classList.add("inner");
            let list=document.createElement('div');
            list.classList.add("list");
            let heading=document.createElement("h3");
            heading.classList.add("heading");
            heading.classList.add(`color${k}`);
            heading.textContent=data.branches[j].short;
            let paragraph=document.createElement("p");
            paragraph.textContent=data.branches[j].name;
            let paragraph1=document.createElement("p");
            paragraph1.textContent="Fee starting at ₹799 per subject";
            let button=document.createElement("button");
            button.classList.add("button-list");
            button.classList.add(`colorb${k}`);
            button.textContent="Apply Now";
            list.appendChild(heading);
            list.appendChild(paragraph);
            list.appendChild(button);
            list.appendChild(paragraph1);
            row.appendChild(list);
        }
        mainSection.appendChild(row);
    }
    console.log(data.branches[0].name);
})