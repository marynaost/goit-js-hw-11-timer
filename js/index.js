class CountdownTimer {
    constructor(targetDate) {
        this.targetDate = targetDate
            
        this.refs = {
            daysC: document.querySelector('[data-value ="days"]'),
            hoursC: document.querySelector('[data-value="hours"]'),
            minsC: document.querySelector('[data-value="mins"]'),
            secsC: document.querySelector('[data-value="secs"]')
        }
    }

    start() {
        const targetDate = new Date('Jan 1, 2022')
        setInterval(() => {
            const deltaTime = targetDate - Date.now()
            const timeComponents = this.getTimeComponents(deltaTime)
            this.updateClockface(timeComponents)
        }, 1000)
    }

    updateClockface({days, hours, mins, secs}) {
        this.refs.daysC.textContent = `${days}`
        this.refs.hoursC.textContent = `${hours}`
        this.refs.minsC.textContent = `${mins}`
        this.refs.secsC.textContent = `${secs}`
    }
    pad(value) {
        return String(value).padStart(2, '0')
    }
    getTimeComponents(time) {
        const days =this. pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60 )));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
        return { days, hours, mins, secs }
    }
}

const timer =  new CountdownTimer( new Date('Jan 1, 2022'));

timer.start()