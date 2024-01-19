<!-- FormPage1.vue -->
<template>
  <div class="container mx-auto">
    <div
      class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8"
    >
      <section
        class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
      >
        <div class=" ">
          <h2
            class="text-lg font-bold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
          >
            Hot Work Permit
          </h2>
        </div>

        <form>
          <div
            class="grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mx-auto cursor-pointer flex w-full"
          >
            <div class="w-full">
              <label
                for="Location"
                class="font-semibold text-gray-700 dark:text-gray-200"
                >Location</label
              >
              <input
                v-model="Location"
                id="Location"
                class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                rows="2"
                required
              />
            </div>
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Worksdescription"
                >Works Description</label
              >
              <textarea
                id="Worksdescription"
                v-model="Worksdescription"
                type="text"
                rows="1"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              ></textarea>
            </div>
            <!-- <div>
              <label class="font-bold text-gray-700 dark:text-gray-200" for="location"
                >Location</label
              >
              <select
                v-model="location"
                id="location"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div> -->
          </div>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="todate"
                >Datetime Start</label
              >
              <input
                id="datetimestart"
                v-model="datetimestart"
                type="datetime-local"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Datetimecomplete"
                >Datetime Complete</label
              >
              <input
                id="Datetimecomplete"
                v-model="Datetimecomplete"
                type="datetime-local"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div class="pt-6">
            <hr />
            <div class="pt-2"></div>
            <label
              class="font-bold text-gray-700 dark:text-gray-200"
              for="workInvolvement"
            >
              General Requirement
            </label>
          </div>

          <div class="pt-2"><hr /></div>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
            <div>
              <label
                for="sprinklersOperable"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="sprinklersOperable" type="checkbox" />
                Available sprinklers, hose streams and extinguishers are in
                service and operable.
              </label>
            </div>
            <div>
              <label
                for="hotWorkEquipment"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="hotWorkEquipment" type="checkbox" />
                Hot work equipment is in good working condition in accordance
                with manufacturer’s specifications.
              </label>
            </div>
            <div>
              <label
                for="specialPermission"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="specialPermission" type="checkbox" />
                Special permission obtained to conduct hot work on metal vessels
                or piping lined with rubber or plastic.
              </label>
            </div>
          </div>

          <div class="pt-6">
            <hr />
            <div class="pt-2"></div>
            <label
              class="font-bold text-gray-700 dark:text-gray-200"
              for="workInvolvement"
            >
              Requirements within 35 ft. (11m) of hot work
            </label>
          </div>
          <div class="pt-2"><hr /></div>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <!-- Checklist Section 2 -->

            <div>
              <label
                for="flammableRemoved"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="flammableRemoved" type="checkbox" />
                Flammable liquid, dust, lint, and oily deposits removed and
                floors swept clean.
              </label>
            </div>
            <div>
              <label
                for="explosiveAtmosphere"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="explosiveAtmosphere" type="checkbox" />
                Explosive atmosphere in area eliminated.
              </label>
            </div>
            <div>
              <label
                for="combustibleFloors"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="combustibleFloors" type="checkbox" />
                Combustible floors wet down or covered with damp sand or
                fire-resistive/noncombustible materials or equivalent.
              </label>
            </div>
            <div>
              <label
                for="electricalShockProtection"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="electricalShockProtection" type="checkbox" />
                Personnel protected from electrical shock when floors are wet.
              </label>
            </div>
            <div>
              <label
                for="removeMaterial"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="removeMaterial" type="checkbox" />
                Remove flammable and combustible material where possible.
                Otherwise protect with fire blankets, guards or metal shields.
              </label>
            </div>
            <div>
              <label
                for="openingsCovered"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="openingsCovered" type="checkbox" />
                All wall and floor openings covered.
              </label>
            </div>
          </div>

          <div class="pt-6">
            <hr />
            <div class="pt-2"></div>
            <label
              class="font-bold text-gray-700 dark:text-gray-200"
              for="workInvolvement"
            >
              Requirements for hot work on walls, ceilings or roofs.
            </label>
          </div>
          <div class="pt-2"><hr /></div>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <!-- Checklist Section 3 -->

            <div>
              <label
                for="noncombustibleConstruction"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="noncombustibleConstruction" type="checkbox" />
                Construction is noncombustible and without combustible coverings
                or insulation.
              </label>
            </div>
            <div>
              <label
                for="combustibleMaterialMoved"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="combustibleMaterialMoved" type="checkbox" />
                Combustible material on other side of walls, ceilings, or roofs
                is moved away.
              </label>
            </div>
          </div>
          <div class="pt-6">
            <hr />
            <div class="pt-2"></div>
            <label
              class="font-bold text-gray-700 dark:text-gray-200"
              for="workInvolvement"
            >
              Requirements for hot work on enclosed equipment:
            </label>
          </div>
          <div class="pt-2"><hr /></div>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <!-- Checklist Section 4 -->

            <div>
              <label
                for="enclosedEquipmentCleaned"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="enclosedEquipmentCleaned" type="checkbox" />
                Enclosed equipment is cleaned of all combustibles.
              </label>
            </div>
            <div>
              <label
                for="enclosedEquipmentCleaned"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="containerarepurged" type="checkbox" />
                Container are purged of flammable liquid/vapor.
              </label>
            </div>
          </div>

          <div class="pt-6">
            <hr />
            <div class="pt-2"></div>
            <label
              class="font-bold text-gray-700 dark:text-gray-200"
              for="workInvolvement"
            >
            Requirements for hot work fire watchman and fire monitoring:
            </label>
          </div>
          <div class="pt-2"><hr /></div>
          <div>
            <label
              for="fireWatchProvided"
              class="text-gray-700 dark:text-gray-200"
            >
              <input id="fireWatchProvided" type="checkbox" />
              Fire watch is provided during and for a minimum of 30 min. after
              hot work, including any break activity.
            </label>
          </div>
          <div>
            <label
              for="fireWatchExtinguishers"
              class="text-gray-700 dark:text-gray-200"
            >
              <input id="fireWatchExtinguishers" type="checkbox" />
              Fire watch is provided with suitable extinguishers and, where
              practical, a charged small hose.
            </label>
          </div>
          <div>
            <label
              for="fireWatchTrained"
              class="text-gray-700 dark:text-gray-200"
            >
              <input id="fireWatchTrained" type="checkbox" />
              Fire watch is trained in use of equipment and in sounding alarm.
            </label>
          </div>
          <div>
            <label
              for="fireWatchRequired"
              class="text-gray-700 dark:text-gray-200"
            >
              <input id="fireWatchRequired" type="checkbox" />
              Fire watch can be required in adjoining areas, above and below.
            </label>
          </div>
          <div class="">
            <label
              for="fireWatchMonitoringExtended"
              class="text-gray-700 dark:text-gray-200"
            >
              <input id="fireWatchMonitoringExtended" type="checkbox" />
              Per the PAI/fire watch, monitoring of hot work area has been
              extended beyond the 30 min.
            </label>
          </div>
        </form>
        <div class="flex justify-end mt-6">
          <!-- <button @click="nextPage"
              class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Next
            </button> -->
        </div>
      </section>
    </div>

    <!-- add more fields as needed -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Data properties for each form input
      Location: "",
      Worksdescription: "",
      datetimestart: "",
      Datetimecomplete: "",
      selectedAuthorities: [],
      radiohotworkby: null,
    };
  },
  methods: {
    nextPage() {
      this.$emit("next-page", this.formData); // Pass formData when emitting "Next" event
    },
    goBack() {
      this.$emit("go-back"); // Emit an event when the "Back" button is clicked
    },
  },
  computed: {
    formData() {
      // Combines all form data into a single object
      return {
        Location: this.Location,
        Worksdescription: this.Worksdescription,
        Datetimestart: this.datetimestart,
        Datetimecomplete: this.Datetimecomplete,
        SelectedAuthorities: this.selectedAuthorities,
        RadioHotworkBy: this.radiohotworkby,
      };
    },
  },
  watch: {
    formData: {
      handler(newFormData) {
        // Emit an event to the parent with the updated form data
        this.$emit("submit-form", newFormData);
      },
      deep: true,
    },
  },
};
</script>
