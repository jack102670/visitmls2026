<!-- Box Info for Admin View-->
<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] p-4 sm:ml-64">
    <div class="container mx-auto">
      <div
        class="relative overflow-hidden bg-[#f7fbff] border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="md:flex justify-between">
          <div class="flex justify-start flex-col ml-5">
            <h2 class="text-3xl font-bold text-blue-900">
              PKT INTERGRATED MANAGEMENT SYSTEM
            </h2>
          </div>
        </div>
      </div>
    </div>
  </main>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] p-4 sm:ml-64">
    <div class="">
      <div
        class="relative overflow-hidden bg-[#f7fbff] border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-4"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="p-2 md:p-4 hover:bg-slate-400"
          >
            <a
              :href="card.link"
              class="relative flex flex-col rounded-xl bg-white border border-3 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <div
                class="h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72 3xl:h-80 overflow-hidden rounded-t-xl bg-blue-gray-500"
              >
                <img
                  :src="card.image"
                  alt="card image"
                  class="w-full h-full lg:h-24 xl:h-24 md:h-24 object-cover p-2 rounded-xl"
                />
              </div>
              <div class="p-4 md:p-6">
                <h5
                  class="mb-2 font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-blue-gray-900"
                >
                  {{ card.title }}
                </h5>
                <p
                  class="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-gray-700"
                >
                  {{ card.description }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "BoxInfo",
  data() {
    return {
      cards: [
        {
          title: "E-claim System",
          description: "Manage your claims online with our E-claim system.",
          image: require("../assets/images/9628ed1e308244e8bb954039b474302f.jpeg"),
          link: "/e-claim", // Add the link to the e-claim system here
        },
        {
          title: "Service portal",
          description: "Access our service portal for all your needs.",
          image:
            "https://media.licdn.com/dms/image/D4D12AQHf927L6V5QSA/article-cover_image-shrink_720_1280/0/1673929460399?e=2147483647&v=beta&t=drd3nagneztidtOjuAP49KDkkXGd1hmqUtMwLDK2_Tc",
          link: "/service-portal", // Add the link to the service portal here
        },
        {
          title: "Coming Soon",
          description: "Stay tuned for updates on our latest feature.",
          image:
            "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg",
          link: "/coming-soon", // Add the link to the upcoming feature here
        },
        // Add more cards here
      ],
    };
  },
};
</script>
