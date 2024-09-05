        
        let liContent = ['Benz', 'Toyota', 'Camry', 'Ford', 'Honda']
        for (let index = 0; index < liContent.length; index++) {
            let olEle2 = document.createElement("ol");
            // const element = array[index];
            let lis = document.createElement('li');
            lis.textContent = liContent[index]
            olEle2.appendChild(li)
            document.body.appendChild(olEle2)
        }