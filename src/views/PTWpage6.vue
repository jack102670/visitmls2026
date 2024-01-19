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
            class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
          >
            Work At Height Permit
          </h2>
        </div>

        <form>
          <div
            class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mx-auto cursor-pointer w-full"
          >
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Contractorname"
                >Contractor Name<span class="text-red-500">*</span></label
              >
              <input
                v-model="Contractorname"
                id="Contractorname"
                type="text"
                required
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Contractorcompany"
                >Contractor Company<span class="text-red-500">*</span></label
              >
              <input
                v-model="Contractorcompany"
                id="Contractorcompany"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Startdate"
                >Start Date<span class="text-red-500">*</span></label
              >
              <input
                v-model="Startdate"
                id="Startdate"
                type="date"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Completedate"
                >Complete Date<span class="text-red-500">*</span></label
              >
              <input
                v-model="Completedate"
                id="Completedate"
                type="date"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Starttime"
                >Start Time<span class="text-red-500">*</span></label
              >
              <input
                v-model="Starttime"
                id="Starttime"
                type="time"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Completetime"
                >Complete Time<span class="text-red-500">*</span></label
              >
              <input
                v-model="Completetime"
                id="Completetime"
                type="time"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Location"
                >Location<span class="text-red-500">*</span></label
              >
              <select
                v-model="Location"
                id="Location"
                type="text"
                required
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="Security">Security</option>
                <option value="Safety">Safety</option>
                <option value="Maintenance">Maintenance</option>
                <option value="ICT">ICT</option>
              </select>
            </div>
          </div>
          <div
            class="grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full"
          >
            <div class="w-full">
              <label
                for="Descofwork"
                class="font-semibold text-gray-700 dark:text-gray-200"
                >Description Of Work</label
              >
              <textarea
                v-model="Descofwork"
                id="Descofwork"
                class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                rows="3"
              ></textarea>
            </div>
          </div>

          <div class="pt-4">
            <hr />
            <div class="pt-2"></div>
            <label
              class="font-bold text-gray-700 dark:text-gray-200"
              for="authority"
              >Which of the following hazards are associated with this work?
            </label>
            <div class="pt-2">
              <hr />
            </div>
          </div>
          <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-3">
            <!-- Row for Falling objects -->

            <!-- Falling objects -->
            <div>
              <label
                for="fallingObjects"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="fallingObjects" type="checkbox" />
                Falling objects
              </label>
            </div>
            <!-- Unguarded edges -->
            <div>
              <label
                for="unguardedEdges"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="unguardedEdges" type="checkbox" />
                Unguarded edges
              </label>
            </div>
            <!-- High winds/weather -->
            <div>
              <label
                for="highWindsWeather"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="highWindsWeather" type="checkbox" />
                High winds/weather
              </label>
            </div>
            <!-- Slope of surface -->
            <div>
              <label
                for="slopeOfSurface"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="slopeOfSurface" type="checkbox" />
                Slope of surface
              </label>
            </div>
            <!-- Overhead electrical cables -->
            <div>
              <label
                for="overheadElectricalCables"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="overheadElectricalCables" type="checkbox" />
                Overhead electrical cables
              </label>
            </div>
            <!-- Other (provide details) -->
            <div>
              <label
                for="otherHazards"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="otherHazards" type="checkbox" />
                Other (provide details):
              </label>
            </div>

            <!-- Column 2 -->

            <!-- Limited roof weight loading (placarded) -->
            <div>
              <label
                for="limitedRoofWeight"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="limitedRoofWeight" type="checkbox" />
                Limited roof weight loading (placarded)
              </label>
            </div>
            <!-- Unsecured ladders -->
            <div>
              <label
                for="unsecuredLadders"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="unsecuredLadders" type="checkbox" />
                Unsecured ladders
              </label>
            </div>
            <!-- Uneven floor surfaces -->
            <div>
              <label
                for="unevenFloorSurfaces"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="unevenFloorSurfaces" type="checkbox" />
                Uneven floor surfaces
              </label>
            </div>
            <!-- Fragile roofs -->
            <div>
              <label
                for="fragileRoofs"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="fragileRoofs" type="checkbox" />
                Fragile roofs
              </label>
            </div>
            <!-- Slippery surface -->
            <div>
              <label
                for="slipperySurface"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="slipperySurface" type="checkbox" />
                Slippery surface
              </label>
            </div>
            <!-- Additional other checkbox -->
            <div>
              <label
                for="additionalOther"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="additionalOther" type="checkbox" />
                Additional other (provide details):
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
              Does the work involve use of any of the following? (Please
              indicate only where relevant)
            </label>
          </div>
          <div class="pt-2"><hr /></div>
          <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-3">
            <!-- Ladders -->
            <div>
              <label for="ladders" class="text-gray-700 dark:text-gray-200">
                <input id="ladders" type="checkbox" v-model="checkladder" />
                Ladders
              </label>
            </div>

            <div>
              <label for="scaffolding" class="text-gray-700 dark:text-gray-200">
                <input
                  id="scaffolding"
                  type="checkbox"
                  v-model="checkscaffolding"
                />
                Scaffolding
              </label>
            </div>
            <!-- Lift Truck -->
            <div>
              <label for="liftTruck" class="text-gray-700 dark:text-gray-200">
                <input
                  id="liftTruck"
                  type="checkbox"
                  v-model="liftruckScissorlift"
                />
                Lift truck / Scissor lift
              </label>
            </div>

            <!-- Scissor Lift -->

            <!-- Working Alone or in Isolation -->
            <div>
              <label
                for="workingAlone"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="workingAlone" type="checkbox" />
                Working alone or in isolation
              </label>
            </div>

            <!-- Travel Restraint -->
            <div>
              <label
                for="travelRestraint"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="travelRestraint" type="checkbox" />
                Travel restraint
              </label>
            </div>

            <!-- Scaffolding -->

            <!-- Man Cage (secured) -->
            <div>
              <label for="manCage" class="text-gray-700 dark:text-gray-200">
                <input id="manCage" type="checkbox" v-model="mancage" />
                Man cage (secured)
              </label>
            </div>

            <!-- Elevated Work Platform (EWP) -->
            <div>
              <label for="ewp" class="text-gray-700 dark:text-gray-200">
                <input id="ewp" type="checkbox" />
                Elevated work platform (EWP)
              </label>
            </div>

            <!-- Climbing Technique (using lanyard) -->
            <div>
              <label
                for="climbingTechnique"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="climbingTechnique" type="checkbox" />
                Climbing technique (using lanyard)
              </label>
            </div>

            <!-- Other (provide details) -->
            <div>
              <label
                for="otherEquipment"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="otherEquipment" type="checkbox" />
                Other (provide details):
              </label>
            </div>
          </div>
          <div v-if="checkladder">
            <div class="pt-6">
              <hr />
              <div class="pt-2"></div>
              <label
                class="font-bold text-gray-700 dark:text-gray-200"
                for="workInvolvement"
              >
                Ladder
              </label>
            </div>
            <div class="pt-2"><hr /></div>

            <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-2">
              <!-- Is the ladder in good condition and suitable for the task? -->
              <div>
                <label
                  for="ladderCondition"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="ladderCondition" type="checkbox" />
                  Is the ladder in good condition and suitable for the task?
                </label>
              </div>

              <!-- Is the ladder tall enough for the task? -->
              <div>
                <label
                  for="ladderHeight"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="ladderHeight" type="checkbox" />
                  Is the ladder tall enough for the task?
                </label>
              </div>

              <!-- Is the ladder on a level footing? -->
              <div>
                <label
                  for="ladderLevel"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="ladderLevel" type="checkbox" />
                  Is the ladder on a level footing?
                </label>
              </div>

              <!-- Is the area below barricaded? -->
              <div>
                <label
                  for="areaBarricaded"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="areaBarricaded" type="checkbox" />
                  Is the area below barricaded?
                </label>
              </div>

              <!-- Is the ladder secured top and bottom? -->
              <div>
                <label
                  for="ladderSecured"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="ladderSecured" type="checkbox" />
                  Is the ladder secured top and bottom? (not applicable for step
                  ladders)
                </label>
              </div>

              <!-- Is the ladder extended with at least three (3) rungs or 900mm overlap? -->
              <div>
                <label
                  for="ladderExtended"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="ladderExtended" type="checkbox" />
                  Is the ladder extended with at least three (3) rungs or 900mm
                  overlap?
                </label>
              </div>

              <!-- Is the ladder position 1 in 4 ratio? -->
              <div>
                <label
                  for="ladderRatio"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="ladderRatio" type="checkbox" />
                  Is the ladder position 1 in 4 ratio?
                </label>
              </div>
            </div>
          </div>

          <div v-if="checkscaffolding">
            <div class="pt-6">
              <hr />
              <div class="pt-2"></div>
              <label
                class="font-bold text-gray-700 dark:text-gray-200"
                for="workInvolvement"
              >
                Scaffolding
              </label>
            </div>
            <div class="pt-2"><hr /></div>
            <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-2">
              <!-- Are kick boards in place? -->
              <div>
                <label
                  for="kickBoards"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="kickBoards" type="checkbox" />
                  Are kick boards in place?
                </label>
              </div>

              <!-- Are hand rails in place? -->
              <div>
                <label for="handRails" class="text-gray-700 dark:text-gray-200">
                  <input id="handRails" type="checkbox" />
                  Are hand rails in place?
                </label>
              </div>

              <!-- Are mid rails in place? -->
              <div>
                <label for="midRails" class="text-gray-700 dark:text-gray-200">
                  <input id="midRails" type="checkbox" />
                  Are mid rails in place?
                </label>
              </div>

              <!-- Is the ladder installed internally (if applicable)? -->
              <div>
                <label
                  for="internalLadder"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="internalLadder" type="checkbox" />
                  Is the ladder installed internally (if applicable)?
                </label>
              </div>

              <!-- Is the scaffold on a solid footing? -->
              <div>
                <label
                  for="solidFooting"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="solidFooting" type="checkbox" />
                  Is the scaffold on a solid footing?
                </label>
              </div>

              <!-- Are the wheels in locked position when in use? -->
              <div>
                <label
                  for="wheelsLocked"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="wheelsLocked" type="checkbox" />
                  Are the wheels in locked position when in use? (e.g. mobile
                  scaffold)
                </label>
              </div>

              <!-- Is the area below barricaded? -->
              <div>
                <label
                  for="areaBarricadedScaffold"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="areaBarricadedScaffold" type="checkbox" />
                  Is the area below barricaded?
                </label>
              </div>

              <!-- Is the scaffold operating within safe working limits? -->
              <div>
                <label
                  for="safeWorkingLimits"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="safeWorkingLimits" type="checkbox" />
                  Is the scaffold operating within safe working limits?
                </label>
              </div>

              <!-- Is the area free from overhead obstructions? -->
              <div>
                <label
                  for="freeFromObstructions"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="freeFromObstructions" type="checkbox" />
                  Is the area free from overhead obstructions?
                </label>
              </div>

              <!-- Is the scaffold erected by a competent person? -->
              <div>
                <label
                  for="competentPerson"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="competentPerson" type="checkbox" />
                  Is the scaffold erected by a competent person?
                </label>
              </div>
            </div>
          </div>
          <div v-if="liftruckScissorlift">
            <div class="pt-6">
              <hr />
              <div class="pt-2"></div>
              <label
                class="font-bold text-gray-700 dark:text-gray-200"
                for="workInvolvement"
              >
                Lift truck / Scissor lift
              </label>
            </div>
            <div class="pt-2"><hr /></div>
            <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-2">
              <!-- Permission to use attained? -->
              <div>
                <label
                  for="permissionToUse"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="permissionToUse" type="checkbox" />
                  Permission to use attained?
                </label>
              </div>

              <!-- Equipment in good working order? -->
              <div>
                <label
                  for="equipmentGoodOrder"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="equipmentGoodOrder" type="checkbox" />
                  Equipment in good working order?
                </label>
              </div>

              <!-- Battery fully charged? -->
              <div>
                <label
                  for="batteryCharged"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="batteryCharged" type="checkbox" />
                  Battery fully charged?
                </label>
              </div>

              <!-- Equipment physically checked? -->
              <div>
                <label
                  for="equipmentChecked"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="equipmentChecked" type="checkbox" />
                  Equipment physically checked?
                </label>
              </div>
            </div>
          </div>

          <div v-if="mancage">
            <div class="pt-6">
              <hr />
              <div class="pt-2"></div>
              <label
                class="font-bold text-gray-700 dark:text-gray-200"
                for="workInvolvement"
              >
                Man cage
              </label>
            </div>
            <div class="pt-2"><hr /></div>
            <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-2">
              <!-- Securing chain and shackle available? -->
              <div>
                <label
                  for="securingChain"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="securingChain" type="checkbox" />
                  Securing chain and shackle available?
                </label>
              </div>

              <!-- Free of physical damage? -->
              <div>
                <label
                  for="freeOfDamage"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="freeOfDamage" type="checkbox" />
                  Free of physical damage?
                </label>
              </div>

              <!-- Appropriate slot size for forks available? -->
              <div>
                <label for="slotSize" class="text-gray-700 dark:text-gray-200">
                  <input id="slotSize" type="checkbox" />
                  Appropriate slot size for forks available?
                </label>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <hr />
            <div class="pt-2"></div>
          </div>
          <label
            class="font-bold text-gray-700 dark:text-gray-200"
            for="workInvolvement"
          >
            Emergency Arrangements for use of Fall Arrest Equipment
            <span class="text-sm">(not applicable for fall restraint)</span>
          </label>
          <div class="pt-2"><hr /></div>

          <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-2">
            <!-- Have emergency and rescue procedures been established, tested and recorded? -->
            <div>
              <label
                for="emergencyProcedures"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="emergencyProcedures" type="checkbox" />
                Have emergency and rescue procedures been established, tested
                and recorded? (These items can be recorded in JHA)
              </label>
            </div>

            <!-- Have appropriate communication arrangements been established for potential emergencies? -->
            <div>
              <label
                for="communicationArrangements"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="communicationArrangements" type="checkbox" />
                Have appropriate communication arrangements been established for
                potential emergencies?
              </label>
            </div>

            <div class="pt-4">
              <p class="text-gray-700 dark:text-gray-200">
                Note: The following sections must be completed.
              </p>
            </div>
          </div>

          <div class="pt-6">
            <hr />
            <div class="pt-2"></div>
            <label
              class="font-bold text-gray-700 dark:text-gray-200"
              for="workInvolvement"
            >
              Mandatory Control Measures
            </label>
          </div>
          <div class="pt-2"><hr /></div>

          <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-2">
            <!-- A task/site specific JHA, or equivalent, has been developed and appropriately addresses identified work at height hazards? -->
            <div>
              <label for="specificJHA" class="text-gray-700 dark:text-gray-200">
                <input id="specificJHA" type="checkbox" />
                A task/site specific JHA, or equivalent, has been developed and
                appropriately addresses identified work at height hazards?
              </label>
            </div>

            <!-- The JHA, or equivalent, has been reviewed and is understood by those involved in the task? -->
            <div>
              <label for="jhaReviewed" class="text-gray-700 dark:text-gray-200">
                <input id="jhaReviewed" type="checkbox" />
                The JHA, or equivalent, has been reviewed and is understood by
                those involved in the task?
              </label>
            </div>

            <!-- Those involved in the work at height activities are appropriately competent and can produce evidence of training where requested? -->
            <div>
              <label
                for="competentTraining"
                class="text-gray-700 dark:text-gray-200"
              >
                <input id="competentTraining" type="checkbox" />
                Those involved in the work at height activities are
                appropriately competent and can produce evidence of training
                where requested?
              </label>
            </div>
          </div>

          <div class="pt-4 grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
            <div>
              <label
                class="font-bold text-gray-700 dark:text-gray-200"
                for="username"
                >Upload Files (Person Involved)</label
              >

              <!-- component -->

              <div>
                <Div class="pt-3">
                  <file-pond
                    class=""
                    name="test"
                    ref="pond1"
                    label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
                    allow-multiple="true"
                    accepted-file-types="image/jpeg, image/png"
                    v-bind:files="myFiles"
                    @input="updateFiles"
                  />
                </Div>
                <!-- component -->
              </div>
            </div>

            <!-- Add v-model to other inputs as needed -->
          </div>

          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
            <!-- Your existing Tailwind form elements -->
            <!-- ... -->

            <!-- Authority Check section with digital form fields -->
            <div>
              <label
                class="font-bold text-gray-700 dark:text-gray-200"
                for="authority"
                >Authority</label
              >
              <!-- <label
                  id="authority"
                  class="form-textarea mt-1 block w-full"
                  rows="3"
                        >The risk control measures and precautions are appropriate for the safe execution of the tasks. The risk controls have been implemented.
          </label> -->
            </div>

            <div class="grid grid-cols-3 gap-4 pt-4">
              <div>
                <label
                  for="contractorSignature"
                  class="font-bold text-gray-700 dark:text-gray-200"
                  >Signed (Contractor Representative)</label
                >
                <input
                  type="text"
                  id="contractorSignature"
                  class="form-input mt-1 block w-full"
                  placeholder="Signature"
                />
              </div>
              <div>
                <label
                  for="contractorDate"
                  class="font-bold text-gray-700 dark:text-gray-200"
                  >Date</label
                >
                <input
                  type="date"
                  id="contractorDate"
                  class="form-input mt-1 block w-full"
                />
              </div>
              <div>
                <label
                  for="contractorTime"
                  class="font-bold text-gray-700 dark:text-gray-200"
                  >Time</label
                >
                <input
                  type="time"
                  id="contractorTime"
                  class="form-input mt-1 block w-full"
                />
              </div>
            </div>

            <!-- Other form sections continue here... -->
            <!-- ... -->
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
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);
export default {
  components: { FilePond },
  data() {
    return {
      mancage: false,
      liftruckScissorlift: false,
      checkladder: false,
      checkscaffolding: false,
      Contractorname: "",
      Contractorcompany: "",
      Startdate: "",
      Completedate: "",
      Starttime: "",
      Completetime: "",
      Location: "",
      Descofwork: "",
      fallingObjects: false,
      unguardedEdges: false,
      highWindsWeather: false,
      slopeOfSurface: false,
      overheadElectricalCables: false,
      otherHazards: false,
      limitedRoofWeight: false,
      unsecuredLadders: false,
      unevenFloorSurfaces: false,
      fragileRoofs: false,
      slipperySurface: false,
      additionalOther: false,
      ladders: false,
      scaffolding: false,
      liftTruck: false,
      workingAlone: false,
      travelRestraint: false,
      ewp: false,
      climbingTechnique: false,
      otherEquipment: false,
      ladderCondition: false,
      ladderHeight: false,
      ladderLevel: false,
      areaBarricaded: false,
      ladderSecured: false,
      ladderExtended: false,
      ladderRatio: false,
      kickBoards: false,
      handRails: false,
      midRails: false,
      internalLadder: false,
      solidFooting: false,
      wheelsLocked: false,
      areaBarricadedScaffold: false,
      safeWorkingLimits: false,
      freeFromObstructions: false,
      competentPerson: false,
      permissionToUse: false,
      equipmentGoodOrder: false,
      batteryCharged: false,
      equipmentChecked: false,
      securingChain: false,
      freeOfDamage: false,
      slotSize: false,
      emergencyProcedures: false,
      communicationArrangements: false,
      specificJHA: false,
      jhaReviewed: false,
      competentTraining: false,
      contractorSignature: "",
      contractorDate: "",
      contractorTime: "",
      selectedAuthorities: [],
      myFiles: [], // Assuming this for filepond
    };
  },
  computed: {
    formData() {
      return {
        Contractorname: this.Contractorname,
        Contractorcompany: this.Contractorcompany,
        Startdate: this.Startdate,
        Completedate: this.Completedate,
        Starttime: this.Starttime,
        Completetime: this.Completetime,
        Location: this.Location,
        Descofwork: this.Descofwork,
        selectedAuthorities: this.selectedAuthorities,
        Files: this.myFiles, // Assuming filepond data
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
  methods: {
    nextPage() {
      this.$emit("next-page"); // Pass formData when emitting "Next" event
    },
    goBack() {
      this.$emit("go-back"); // Emit an event when the "Next" button is clicked
    },
  },
};
</script>
