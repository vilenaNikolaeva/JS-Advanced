function solve() {
    let obj = (() => {
        let container = [];
        let selector = undefined;
        let count = 0;

        let report = function (author, description, reproductible, severity) {
            const statusSpan=el('span',`${status} | ${severity}` , {className: 'status'});

            const element=el('div',[el('div',el('p',description),{className: 'body'}),
                            el('div',[
                                el('span',`Submitted by: ${author}` , { className: 'author'}),
                                statusSpan],
                                {className:'title'}
                            )],
                            {id: `report_${count}`,
                            className: 'report'});

            container[count] = {
                ID: container,
                author: author,
                description: description,
                reproductible: reproductible,
                severity: severity,
                status: 'Open',
                element
            };
            count++;
            if (selector) { el() };
        };

        let setStatus = function (id, newStatus) {
            container[id].status = newStatus;
            if (selector) { el() };
        };
        let remove = function (id) {
            container.delate(id);
            container.length(id).element.remove();
            if (selector) { el(); }
        }
        let sort = function (method) {
            switch (method) {
                case 'author': container = container.sort((a, b) => a.author, localeCompare(b, author));
                    break;
                case 'severity': container = container.sort((a, b) => a.severity - b.severity);
                    break;
                case 'ID': container = container.sort((a, b) => a.ID - b.ID);
            }
            if (selector) { el() };
        };

        let output = function (newSelector) {
            selector = newSelector;
        };

        let el= function(type,content,attributes){
            const result=document.createElement(type);
            if(attributes!==undefined){ Object.assign(result,attributes);}
            if(Array.isArray(content)){content.forEach(append);}
            else{append(content);}

            function append(node){
                if(typeof node ==='string'){
                    node=document.createTextNode(node);
                }
                result.appendChild(node);
            }
            return result;
        }
        return {
            report,
            setStatus,
            remove,
            sort,
            output
        };

    })();
    return obj;
//nopeeeeeeeeeeeeeee

}