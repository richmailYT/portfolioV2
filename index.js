const app = Vue.createApp({
    data() {
        const skills_array = [ "nodejs", "socketio", "vue3", "mongodb", "expressjs", "puppeteer", "sass" ];
        const skills = new Object();

        for (let i = 0; i < skills_array.length; i++) {
            skill = skills_array[i]
            skills[skill] = new Object();
            skills[skill].slide_1 = false;
            skills[skill].slide_2 = false;
            skills[skill].slide_playing = false;
            skills[skill].slide_stop = false;
        }
        
        return {
            skills,
            skills_array
        }
    },
    methods: {
        init() {
            
        },

        async sleep(ms) {
            return new Promise((resolve) => {
                const start = Date.now();
                setTimeout(() => {
                    resolve(Date.now() - start);
                }, ms);
            });
        },

        async change_active_skill(skill, bool) {
            if (this.skills[skill].slide_playing == true) {
                this.skills[skill].slide_stop = true;
            }
            while (true) {
                if (this.skills[skill].slide_playing == false) {
                    break;
                } else {
                    await this.sleep(5);
                }
            }

            if (bool == true) {
                this.skills[skill].slide_1 = bool;
            } else {        
                this.skills[skill].slide_2 = bool;
            }

            this.skills[skill].slide_playing = true;
            for (let i = 0; i < 30; i++) {
                await this.sleep(5);
                if (this.skills[skill].slide_stop == true) {
                    this.skills[skill].slide_stop = false;
                    this.skills[skill].slide_playing = false;
                    return;
                }
            }

            if (bool == false) {
                this.skills[skill].slide_1 = bool;
            } else {
                this.skills[skill].slide_2 = bool;
            }
            this.skills[skill].slide_playing = false;
        }
    },
    mounted() {
        this.init();
    }
})
app.mount("#app");