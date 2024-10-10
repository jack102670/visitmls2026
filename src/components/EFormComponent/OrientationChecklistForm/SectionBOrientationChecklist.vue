<template>
    <div class="border border-[1px] p-4 rounded-md">
        <div>
            <h1 class="font-bold text-md">Completion: </h1>
        </div>
        <div class="grid grid-cols-9 gap-2 mt-4">
            <div class="col-span-3 ">
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="emailRequest" type="checkbox" name="emailRequest" value="emailRequest"
                            v-model="form.emailRequest"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-2 mb-2 space-x-2">

                        <label for="emailRequest"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail
                            (Request to ICT & CC to HOD)</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="PrForDesktop" type="checkbox" name="PrForDesktop" value="PrForDesktop"
                            v-model="form.PrForDesktop"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-2 mb-2 space-x-2">
                        <label for="PrForDesktop" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pr
                            for
                            Desktop</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="PhoneExt" type="checkbox" name="PhoneExt" value="PhoneExt" v-model="showPhoneInput"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-2 mb-2 space-x-2">

                        <label for="PhoneExt" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone
                            Ext</label>

                        <div v-if="showPhoneInput" class="mt-2">
                            <input type="number" v-model="form.PhoneExt"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter Phone" />
                            <span v-if="validationErrors.PhoneExt" class="text-red-500 text-sm">Please fill in this
                                field.</span>
                        </div>

                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="TagLine" type="checkbox" name="TagLine" value="TagLine" v-model="form.TagLine"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-2 mb-2 space-x-2">
                        <label for="TagLine" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Tag line
                            (for
                            name card)</label>
                    </div>
                </div>
            </div>
            <div class="col-span-3 ">
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="CoMobile" type="checkbox" name="CoMobile" value="CoMobile" v-model="showOtherInput"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-2 mb-2 space-x-2">
                        <label for="CoMobile" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Co.
                            Mobile</label>
                        <div v-if="showOtherInput" class="mt-2">
                            <input type="number" v-model="form.CoMobile"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter Co. Mobile" />
                            <span v-if="validationErrors.CoMobile" class="text-red-500 text-sm">Please fill in this
                                field.</span>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="PrForLaptop" type="checkbox" name="PrForLaptop" value="PrForLaptop"
                            v-model="form.PrForLaptop"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-2 mb-2 space-x-2">
                        <label for="PrForLaptop" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pr
                            for
                            Laptop</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="TelephonePin" type="checkbox" name="TelephonePin" value="TelephonePin"
                            v-model="form.TelephonePin"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-2 mb-2 space-x-2">

                        <label for="TelephonePin"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telephone Pin</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="Others" type="checkbox" name="Others" value="Others" v-model="form.Others"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-2 mb-2 space-x-2">
                        <label for="Others" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Others</label>
                    </div>
                </div>
            </div>
            <div class="col-span-3 ">
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="NameCard" type="checkbox" name="NameCard" value="NameCard" v-model="form.NameCard"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-2 mb-2 space-x-2">

                        <label for="NameCard" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">name
                            Card</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="SittingArrangement" type="checkbox" name="SittingArrangement"
                            value="SittingArrangement" v-model="form.SittingArrangement"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-2 mb-2 space-x-2">
                        <label for="SittingArrangement"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sitting
                            Arrangement</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="FacebookAccount" type="checkbox" name="FacebookAccount" value="FacebookAccount"
                            v-model="form.FacebookAccount"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-2 mb-2 space-x-2">

                        <label for="FacebookAccount"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Facebook Account</label>
                    </div>
                </div>
            </div>

        </div>
        <div class="border border-b-[1px] my-4"></div>
        <div>
            <h2 class="font-bold text-md">
                Orientation (2 times a month : 1st batch 1st-14th of a month, 2nd batch 15-31st of a month)
            </h2>
        </div>
        <div class="grid grid-cols-8 gap-2 mt-4">
            <div class="col-span-8 ">
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="WelcomeNewHired" type="checkbox" name="WelcomeNewHired" value="WelcomeNewHired"
                            v-model="form.WelcomeNewHired"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">

                        <label for="WelcomeNewHired"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Welcoming new hired, take
                            finger print & photo</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="OrientatationBriefing" type="checkbox" name="OrientatationBriefing"
                            value="OrientatationBriefing" v-model="form.OrientatationBriefing"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">
                        <label for="OrientatationBriefing"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Orientation briefing - on
                            presentation slide</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="CompHandbookBriefing" type="checkbox" name="CompHandbookBriefing"
                            value="CompHandbookBriefing" v-model="form.CompHandbookBriefing"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">

                        <label for="CompHandbookBriefing"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company’s handbook
                            briefing - (HRA folder at desktop)
                            (to advice how to retrieve handbook, and to read within the probationary period).</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="PanelClinicInfo" type="checkbox" name="PanelClinicInfo" value="PanelClinicInfo"
                            v-model="form.PanelClinicInfo"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">
                        <label for="PanelClinicInfo" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Information on Panel Clinic</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="MedicalLeave" type="checkbox" name="MedicalLeave" value="MedicalLeave"
                            v-model="form.MedicalLeave"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">
                        <label for="MedicalLeave" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Medical leave - clinic to indicate the type of sickness on Medical Certificate.</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="OrientationBriefing" type="checkbox" name="OrientationBriefing"
                            value="OrientationBriefing" v-model="form.OrientatationBriefing"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">
                        <label for="OrientationBriefing"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Orientation briefing - on
                            presentation slide</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="Tardiness" type="checkbox" name="Tardiness" value="Tardiness"
                            v-model="form.Tardiness"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">
                        <label for="Tardiness" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Tardiness - reasonable explanation & evidence (if any)</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="Server" type="checkbox" name="Server" value="Server" v-model="form.Server"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">
                        <label for="Server" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Leave
                            form, Claim Form, OT Form, Orientation slide, Handbook - server</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="UseofTelephone" type="checkbox" name="UseofTelephone" value="UseofTelephone"
                            v-model="form.UseofTelephone"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">
                        <label for="UseofTelephone" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Use of telephone & Call out pin number</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="QualityAndEnvironmental" type="checkbox" name="QualityAndEnvironmental"
                            value="QualityAndEnvironmental" v-model="form.QualityAndEnvironmental"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">
                        <label for="QualityAndEnvironmental"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Quality & Environmental,
                            Safety, Security & Information Technology briefing</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="WorkPlaceTour" type="checkbox" name="WorkPlaceTour" value="WorkPlaceTour"
                            v-model="form.WorkPlaceTour"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">
                        <label for="WorkPlaceTour" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Workplace tour (tidiness & cleanliness, save electricity, use of pantry, not to dirty the
                            carpet
                            e.g. don’t fill the cup too full of water that cause spillage.)</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="FacilitiesAndBenefit" type="checkbox" name="FacilitiesAndBenefit"
                            value="FacilitiesAndBenefit" v-model="form.FacilitiesAndBenefit"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">
                        <label for="email" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Facilities
                            & Benefits provided by the Company
                            (e.g. Gym & Shower facilities, massage chair, breakfast, etc)</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="HonestyCorner" type="checkbox" name="HonestyCorner" value="HonestyCorner"
                            v-model="form.HonestyCorner"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">
                        <label for="HonestyCorner" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Honesty Corner (pay box, price tag, forms, voucher)</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="GivePinNumber" type="checkbox" name="GivePinNumber" value="GivePinNumber"
                            v-model="form.GivePinNumber"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">
                        <label for="GivePinNumber" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Give pin number (employee to save into their mobile), company T-shirt, car sticker
                            (if required), employee tag)</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="border border-b-[1px] my-4"></div>
        <div>
            <h2 class="font-bold text-md">
                Orientation - Facebook posting (on the first day of commencing job)
            </h2>
        </div>
        <div class="grid grid-cols-8 gap-2 mt-4">
            <div class="col-span-8 ">
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="NewlyHired" type="checkbox" name="NewlyHired" value="NewlyHired"
                            v-model="form.NewlyHired"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">

                        <label for="NewlyHired" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add
                            the newly hired into Facebook Kick-Ass Group</label>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="col-span-1">
                        <input id="PostInKickAss" type="checkbox" name="PostInKickAss" value="PostInKickAss"
                            v-model="form.PostInKickAss"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="col-span-5 mb-2 space-x-2">
                        <label for="PostInKickAss"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Post in Kick-Ass to
                            announce on the newly hired</label>
                    </div>
                </div>

            </div>
        </div>
        <div class="grid grid-cols-8 space-x-2 mt-4">
            <div class="col-span-8 flex justify-end">
                <button @click.prevent="confirmExit"
                    class="bg-transparent text-rejected px-10 py-2 rounded-md border-[2px] border-rejected mr-4">
                    Back
                </button>
                <button @click.prevent="submitForm" class="bg-verified font-bold text-white px-10 py-2 rounded-md">
                    Submit
                </button>
            </div>
        </div>

    </div>
</template>

<script>
    import Swal from 'sweetalert2';
    export default {
        data() {
            return {
                form: {
                    emailRequest: '',
                    PrForDesktop: '',
                    PhoneExt: '',
                    TagLine: '',
                    CoMobile: '',
                    PrForLaptop: '',
                    TelephonePin: '',
                    Others: '',
                    NameCard: '',
                    SittingArrangement: '',
                    FacebookAccount: '',
                    WelcomeNewHired: '',
                    CompHandbookBriefing: '',
                    PanelClinicInfo: '',
                    MedicalLeave: '',
                    OrientatationBriefing: '',
                    Tardiness: '',
                    Server: '',
                    UseofTelephone: '',
                    QualityAndEnvironmental: '',
                    WorkPlaceTour: '',
                    FacilitiesAndBenefit: '',
                    HonestyCorner: '',
                    GivePinNumber: '',
                    NewlyHired: '',
                    PostInKickAss: '',
                },
                showOtherInput: false,
                showPhoneInput: false,
                validationErrors: {
                    PhoneExt: false,
                    CoMobile: false
                }
            };
        },
        methods: {
            validateForm() {
                this.validationErrors.PhoneExt = false;
                this.validationErrors.CoMobile = false;
                if (this.showOtherInput && !this.form.CoMobile) {
                    this.validationErrors.CoMobile = true;
                }
                if (this.showPhoneInput && !this.form.PhoneExt) {
                    this.validationErrors.PhoneExt = true;
                }
                return !this.validationErrors.PhoneExt && !this.validationErrors.CoMobile;
            },
            confirmExit() {
                Swal.fire({
                    title: 'Are you sure you want to exit?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Exit!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$router.push('/e-dashboard');
                    }
                })
            },
            submitForm() {
                if (this.validateForm()) {
                    Swal.fire({
                        title: 'Are you sure you want to submit?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, Submit!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            console.log('Form data saved:', this.form);
                            this.form = {
                                emailRequest: '',
                                PrForDesktop: '',
                                PhoneExt: '',
                                TagLine: '',
                                CoMobile: '',
                                PrForLaptop: '',
                                TelephonePin: '',
                                Others: '',
                                NameCard: '',
                                SittingArrangement: '',
                                FacebookAccount: '',
                                WelcomeNewHired: '',
                                CompHandbookBriefing: '',
                                PanelClinicInfo: '',
                                MedicalLeave: '',
                                OrientatationBriefing: '',
                                Tardiness: '',
                                Server: '',
                                UseofTelephone: '',
                                QualityAndEnvironmental: '',
                                WorkPlaceTour: '',
                                FacilitiesAndBenefit: '',
                                HonestyCorner: '',
                                GivePinNumber: '',
                                NewlyHired: '',
                                PostInKickAss: '',
                            };
                            Swal.fire({
                                title: 'Saved!',
                                text: 'Your data has been saved.',
                                confirmButtonColor: '#3085d6',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            });
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Please fill in all required fields.',
                        icon: 'error',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'OK'
                    });
                }
            },
            resetForm() {
                this.form = {
                    emailRequest: '',
                    PrForDesktop: '',
                    PhoneExt: '',
                    TagLine: '',
                    CoMobile: '',
                    PrForLaptop: '',
                    TelephonePin: '',
                    Others: '',
                    NameCard: '',
                    SittingArrangement: '',
                    FacebookAccount: '',
                    WelcomeNewHired: '',
                    OrientatationBriefing: '',
                    CompHandbookBriefing: '',
                    PanelClinicInfo: '',
                    MedicalLeave: '',
                    Tardiness: '',
                    Server: '',
                    UseofTelephone: '',
                    QualityAndEnvironmental: '',
                    WorkPlaceTour: '',
                    FacilitiesAndBenefit: '',
                    HonestyCorner: '',
                    GivePinNumber: '',
                    NewlyHired: '',
                    PostInKickAss: '',
                };
                this.showOtherInput = false;
            },
        },
    };
</script>