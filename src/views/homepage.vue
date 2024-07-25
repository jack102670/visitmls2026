<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64">
    <div>
      <div
        class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="md:flex justify-between">
          <div class="flex justify-start flex-col ml-5">
            <h2 class="text-3xl font-bold text-blue-900 dark:text-white">
              PKT INTEGRATED MANAGEMENT SYSTEM
            </h2>
          </div>
        </div>
      </div>
    </div>
    <main class="">
      <div class="text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] py-4">
        <div
          class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl "
        >
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-4 "
          >
            <div 
              v-for="(card, index) in cards"
              :key="index"
              class=""
            >
              <a @click="handleCardClick(card, $event)"
                class="relative flex flex-col rounded-xl bg-white dark:bg-[#111827] dark:text-white border border-3 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out dark:border-gray-800"
              >
                <div
                  class="overflow-hidden rounded-t-xl bg-blue-gray-500"
                >
                  <img
                    :src="card.image"
                    alt="card image"
                    class="w-full h-full lg:h-24 xl:h-24 md:h-24 object-cover p-2 rounded-xl"
                  /> 
                </div>
                <div class="p-4 md:p-6 text-center">
                  <h5
                    class="mb-2 font-semibold text-md text-blue-gray-900"
                  >
                    {{ card.title }}
                  </h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </main>
</template>

<script>
import { store } from '../views/store.js';

export default {
  name: "BoxInfo",
  data() {
    return {
      cards: [
        {
          title: "E-claim System",
          description: "Manage your claims online with our E-claim system.",
          image: require("../assets/images/9628ed1e308244e8bb954039b474302f.jpeg"),
          link: "/eclaimhomepage",
        },
        {
          title: "Safety & Security System",
          description: "Access our service portal for all your needs.",
          image:
            "https://media.licdn.com/dms/image/D4D12AQHf927L6V5QSA/article-cover_image-shrink_720_1280/0/1673929460399?e=2147483647&v=beta&t=drd3nagneztidtOjuAP49KDkkXGd1hmqUtMwLDK2_Tc",
          link: "/Dashboard",
        },
        {
          title: "Coming Soon...",
          description: "Stay tuned for updates on our latest feature.",
          image:
            "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg",
          link: "",
        },
      ],
    };
  },
  methods: {
    checkUserStatusAndShowModal() {
      return new Promise((resolve, reject) => {
        const username_id = store.getSession().userDetails.userId;
        fetch(`http://172.28.28.91:97/api/User/GetEmployeeById/${username_id}`)
          .then((response) => response.json())
          .then((data) => {
            if(data.result.length > 0) {
              const userStatus = data.result[0].account_status;
              if (userStatus === '0') {
              resolve(0);
            } else {
              resolve(1);
            }
            }
            else{
              resolve(2);
            }
            
           // console.log('User status:', userStatus);
            
          })
          .catch((error) => {
            console.error('There was an error fetching the user status:', error);
            
            reject(error);
          });
      });
    },
    handleCardClick(card, event) {
      event.preventDefault(); // Prevent the default action of the link

      if (card.title === "E-claim System") {
        this.checkUserStatusAndShowModal().then((hasCompletedProfile) => {
          if (hasCompletedProfile === 0) {
            alert("Please complete your profile before using the E-claim system.");
          } else if(hasCompletedProfile === 1) {
            window.location.href = card.link;
          }
          else if(hasCompletedProfile === 2){
            alert("You don't have user profile yet. Please contact the HR administrator.");
          }
        });
      } else {
        window.location.href = card.link;
      }
    }
  },
  mounted() {
    store.setControlView(null);

    let openOrNot = localStorage.getItem("openOrNot");
    const element = document.querySelector("main");
    if (element && openOrNot == "false") {
      element.classList.add("become-big");
    } else if (element && openOrNot == "true") {
      element.classList.remove("become-big");
    }
  },
};
</script>
