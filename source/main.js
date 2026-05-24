generateWidgets = () => {
    const widgetContainer = document.getElementById('widget-container');
    const widget1 = document.createElement('div');
    widget1.style.gridArea = "widget1";
    widget1.className = 'widgets';
    // widget1.style.color = 'white';
    widget1.style.backgroundColor = '#312f2e';
    widget1.innerText = `"The mind is everything. What you think you become." - Buddha`;
    widgetContainer.appendChild(widget1);

    const widget2 = document.createElement('div');
    widget2.style.gridArea = "widget2";
    widget2.className = 'widgets';
    widget2.style.backgroundImage = "url('./public/assets/images/bck3.png')";
    widget2.style.backgroundSize = "cover";
    widgetContainer.appendChild(widget2);

    const widget3 = document.createElement('div');
    widget3.style.gridArea = "widget3";
    widget3.className = 'widgets';
    widget3.innerText = 'PRIORITY TASK';
    widget3.style.backgroundColor = '#192224';
    widgetContainer.appendChild(widget3);

    const widget4 = document.createElement('div');
    widget4.style.gridArea = "widget4";
    widget4.className = 'widgets';
    widget4.innerText = 'REMINDERS';
    widget4.style.backgroundColor = '#200A09';
    widgetContainer.appendChild(widget4);

    const widget5 = document.createElement('div');
    widget5.style.gridArea = "widget5";
    widget5.className = 'widgets';
    widget5.style.backgroundImage = "url('./public/assets/images/bck2.png')";
    widget5.style.backgroundSize = "cover";
    widgetContainer.appendChild(widget5);   

    const widget6 = document.createElement('div');
    widget6.style.gridArea = "widget6";
    widget6.className = 'widgets';
    widget6.innerText = 'TIMETABLE';
    widgetContainer.appendChild(widget6);

    const widget7 = document.createElement('div');
    widget7.style.gridArea = "widget7";
    widget7.className = 'widgets';
    widget7.innerText = 'FINANCIALS';
    widgetContainer.appendChild(widget7);

    const widget8 = document.createElement('div');
    widget8.style.gridArea = "widget8";
    widget8.className = 'widgets';
    widget8.innerText = 'Widget 8';
    widget8.style.backgroundColor = '#7D7461';
    widgetContainer.appendChild(widget8);

    const widget9 = document.createElement('div');
    widget9.style.gridArea = "widget9";
    widget9.className = 'widgets';
    widget9.innerText = 'Widget 9';
    widget9.style.backgroundColor = '#192224';
    widgetContainer.appendChild(widget9);
};

generateWidgets();

// ertyujhdfytxgxbcvpsti8765edfghjkmnbvc