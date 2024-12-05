<template>
    <div>

    </div>
</template>
<script>
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { GetHODOrientationChecklist } from '@/api/EFormApi.js'

export default {
    name: 'EOCExportPDF',
    data() {
        return {
            displayPDF: {
                dateRequested: '',
                approvedDate: '',
                hod: {
                    name: '',
                    company: '',
                    department: '',
                    dateJoined: '',
                    branch: '',
                    office: '',
                    floor: '',
                    purpose: '',
                    hoD_Emp_Email: '',
                    hoD_Emp_NameCard: '',
                    hoD_Emp_Tagline: '',
                    hoD_Emp_FB: '',
                    hoD_Emp_ChineseName: '',
                    hoD_Emp_PhoneNo: '',
                    hoD_Emp_Desktop: '',
                    hoD_Emp_Laptop: '',
                    hoD_Emp_Other: '',
                    requesterName: '',
                    requesterDesignation: '',
                    requesterDept: '',

                },
                hr: {
                    hR_Email: '',
                    hR_NameCard: '',
                    hR_Tagline: '',
                    hR_FB: '',
                    hR_Desktop: '',
                    hR_Laptop: '',
                    hR_Other: '',
                    hR_PhoneExt: '',
                    hR_PhonePin: '',
                    hR_SitArg: '',
                    welcomingPhoto: '',
                    orientBrief: '',
                    compBrief: '',
                    handbookAdvice: '',
                    panelClinicInfo: '',
                    mcNote: '',
                    tardiness: '',
                    hraForm: '',
                    phoneUsage: '',
                    qessitBrief: '',
                    workplaceTour: '',
                    facilityComp: '',
                    honestyCorner: '',
                    empItems: '',
                    fbGroup: '',
                    fbPost: '',
                    approverName: '',
                    approverDesignation: '',
                }
            }
        }
    },

    computed: {
        formattedDateJoined() {
            return this.displayPDF.hod?.dateJoined.replace(/-/g, '/');
        },
    },
    methods: {
        async GetHODOrientationChecklist(refNo) {
            try {
                const response = await GetHODOrientationChecklist(refNo);

                if (response && response.result) {
                    const data = response.result;

                    this.displayPDF = {
                        ...this.displayPDF,
                        ...data,
                        hod: {
                            ...this.displayPDF.hod,
                            ...data.hod
                        },
                        hr: {
                            ...this.displayPDF.hr,
                            ...data.hr
                        }
                    };

                    // console.log("Updated displayPDF:", this.displayPDF);
                } else {
                    console.error("Unexpected API response format:", response);
                }
            } catch (error) {
                console.error("Error loading HOD orientation checklist:", error);
                throw error;
            }
        },


        async generateEOC(refNo) {
            try {
                await this.GetHODOrientationChecklist(refNo);

                const checkmark = (condition) => (condition ? '  /  ' : '     ');

                const hoD_Emp_EmailChecked = checkmark(this.displayPDF.hod?.hoD_Emp_Email === '1');
                const hoD_Emp_NameCardChecked = checkmark(this.displayPDF.hod?.hoD_Emp_NameCard === '1');
                const hoD_Emp_DesktopChecked = checkmark (this.displayPDF.hod?.hoD_Emp_Desktop === '1');
                const hoD_Emp_LaptopChecked = checkmark(this.displayPDF.hod?.hoD_Emp_Laptop === '1');
                const hoD_Emp_OtherChecked = checkmark(this.displayPDF.hod?.hoD_Emp_Other !== '');

                const EOC = {
                    header: {
                        stack: [
                            {
                                columns: [
                                    { text: 'PKT GROUP COMPANIES', style: 'header' },
                                    {
                                        stack: [
                                            { text: 'Form No: PKT-FR66', style: 'headerRight', alignment: 'right' },
                                            { text: 'Rev: 02, ED: 19th September.17', style: 'headerRight', alignment: 'right' },

                                        ]
                                    }
                                ]
                            }
                        ],
                        margin: [40, 10, 40, 10]
                    },
                    content: [
                        {
                            text: 'EMPLOYEE ORIENTATION CHECKLIST',
                            alignment: 'center',
                            bold: true,
                            fontSize: 14,
                            margin: [0, 10, 0, 5]
                        },
                        {
                            table: {
                                widths: ['16.67%', '16.67%', '16.67%', '16.67%', '16.67%', '16.67%'],
                                body: [
                                    [
                                        {
                                            text: 'Name :',
                                            bold: true,
                                            fontSize: 8,

                                        }, {
                                            text: `${this.displayPDF.hod?.name || '-'}`,
                                            fontSize: 8,
                                            bold: true,
                                            colSpan: 2,
                                        }, {}, {
                                            text: 'Company :',
                                            bold: true,
                                            fontSize: 8,
                                        }, {
                                            text: `${this.displayPDF.hod?.company || '-'}`,
                                            fontSize: 8,
                                            bold: true,
                                            colSpan: 2,
                                        }, {},
                                    ],
                                    [
                                        {
                                            text: 'Department :',
                                            bold: true,
                                            fontSize: 8,
                                        }, {
                                            text: `${this.displayPDF.hod?.department || '-'}`,
                                            fontSize: 8,
                                            bold: true,
                                            colSpan: 2,
                                        }, {},
                                        {
                                            text: 'Date Joined :',
                                            bold: true,
                                            fontSize: 8,
                                        },
                                        {
                                            text: `${this.formattedDateJoined || '-'}`,
                                            fontSize: 8,
                                            bold: true,
                                            colSpan: 2,
                                        }, {}
                                    ],
                                    [{}, {}, {}, {}, {}, {}],
                                ],
                            },
                            layout: 'noBorders',
                        },
                        {
                            table: {
                                widths: ['10%', '7%', '10%', '10%', '10%', '10%', '7%', '10%', '10%', '10%'],
                                body: [

                                    [{
                                        text: [
                                            'A) ',
                                            { text: 'Pre-employment preparation', bold: true },
                                            ' - Items required shall be ready at least two days before the commencement date'
                                        ],
                                        colSpan: 10,
                                        fontSize: 9,
                                        border: [true, true, true, false]
                                    }, {}, {}, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        colSpan: 10,
                                        text: '',
                                        border: [true, false, true, false]

                                    }, {}, {}, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: 'to be filled by HOD',
                                        bold: false,
                                        italics: true,
                                        fontSize: 8,
                                        colSpan: 5,
                                        border: [true, true, true, false]

                                    }, {}, {}, {}, {}, {
                                        text: 'For HR Personnel Only',
                                        bold: false,
                                        italics: true,
                                        fontSize: 8,
                                        colSpan: 5,
                                        border: [true, false, true, false]

                                    }, {}, {}, {}, {}],

                                    [{
                                        text: 'Requisition from HOD :',
                                        bold: true,
                                        fontSize: 8,
                                        colSpan: 5,
                                        border: [true, false, true, false]

                                    }, {}, {}, {}, {}, {
                                        text: 'Completion :',
                                        bold: true,
                                        fontSize: 8,
                                        colSpan: 5,
                                        border: [true, false, true, false]
                                    }, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text:`${hoD_Emp_EmailChecked}`,
                                        alignment: 'center',
                                        fontSize: 8,
                                        border: [true, true, true, true],

                                    }, {
                                        text: 'E-mail',
                                        fontSize: 8,
                                        bold: false,
                                        border: [false, false, true, false],
                                        colSpan: 3,
                                    }, {}, {}, {
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: '[   ]',
                                        border: [true, true, true, false],
                                        fontSize: 8,
                                        alignment: 'center'
                                    }, {
                                        text: 'E-mail (Request to ICT & cc to HOD)',
                                        fontSize: 8,
                                        colSpan: 3,
                                        border: [true, false, true, false]
                                    }, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]

                                    }, {
                                        text: `${hoD_Emp_NameCardChecked}`,
                                        alignment: 'center',
                                        border: [true, true, true, true],
                                        fontSize: 8,

                                    }, {
                                        text: 'Name Card',
                                        colSpan: 3,
                                        fontSize: 8,
                                        border: [true, false, true, false]
                                    }, {}, {}, {
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: '[   ]',
                                        fontSize: 8,
                                        alignment: 'center',
                                        border: [true, true, true, true],

                                    }, {
                                        text: 'Co. Mobile (No. :______________________)',
                                        colSpan: 3,
                                        fontSize: 8,
                                        border: [true, false, true, false],

                                    }, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: `${hoD_Emp_DesktopChecked}`,
                                        fontSize: 8,
                                        alignment: 'center',
                                        border: [true, true, true, true]
                                    }, {
                                        text: 'Desktop',
                                        fontSize: 8,
                                        colSpan: 3,
                                        border: [true, false, true, false],

                                    }, {}, {}, {
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: '[   ]',
                                        fontSize: 8,
                                        alignment: 'center',
                                    }, {
                                        text: 'Name card',
                                        fontSize: 8,
                                        colSpan: 3,
                                        border: [true, false, true, false]
                                    }, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: `${hoD_Emp_LaptopChecked}`,
                                        border: [true, true, true, true],
                                        fontSize: 8,
                                        alignment: 'center',
                                    }, {
                                        text: 'Laptop',
                                        fontSize: 8,
                                        colSpan: 3,
                                        border: [true, false, true, false]
                                    }, {}, {}, {
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: '[   ]',
                                        border: [true, true, true, true],
                                        fontSize: 8,
                                        alignment: 'center'
                                    }, {
                                        text: 'PR For Desktop',
                                        border: [true, false, true, false],
                                        fontSize: 8,
                                        colSpan: 3,
                                    }, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: `${hoD_Emp_OtherChecked}`,
                                        border: [true, true, true, true],
                                        fontSize: 8,
                                        alignment: 'center',
                                    }, {
                                        text: 'Others - Please Indicate',
                                        fontSize: 8,
                                        colSpan: 3,
                                        border: [true, false, true, false]
                                    }, {}, {}, {
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: '[   ]',
                                        border: [true, true, true, true],
                                        fontSize: 8,
                                        alignment: 'center',
                                    }, {
                                        text: 'PR for laptop',
                                        fontSize: 8,
                                        colSpan: 3,
                                        border: [true, false, true, false]
                                    }, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, false, false]
                                    }, {
                                        text: '',
                                        border: [false, false, false, false]
                                    }, {
                                        text: `${this.displayPDF.hod?.hoD_Emp_Other || '-'}`,
                                        colSpan: 3,
                                        border: [false, false, true, false],
                                        fontSize: 8,
                                    }, {}, {}, {
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: '[   ]',
                                        border: [true, true, true, true],
                                        fontSize: 8,
                                        alignment: 'center',
                                    }, {
                                        text: 'Sitting Arrangement',
                                        fontSize: 8,
                                        colSpan: 3,
                                        border: [true, false, true, false]

                                    }, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, false, false],
                                        colSpan: 5,
                                    }, {}, {}, {}, {}, {
                                        text: '',
                                        border: [true, false, true, false],
                                    }, {
                                        text: '[   ]',
                                        border: [true, true, true, true],
                                        fontSize: 8,
                                        alignment: 'center',
                                    }, {
                                        text: 'Phone Ext (No. :_______________________)',
                                        fontSize: 8,
                                        colSpan: 3,
                                        border: [true, false, true, false]
                                    }, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, false, false],
                                        colSpan: 5,
                                    }, {}, {}, {}, {}, {
                                        text: '',
                                        border: [true, false, true, false],
                                    }, {
                                        text: '[   ]',
                                        border: [true, true, true, true],
                                        fontSize: 8,
                                        alignment: 'center',
                                    }, {
                                        text: 'Telephone pin',
                                        fontSize: 8,
                                        colSpan: 3,
                                        border: [true, false, true, false]
                                    }, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, false, false],
                                        colSpan: 5,
                                    }, {}, {}, {}, {}, {
                                        text: '',
                                        border: [true, false, true, false],
                                    }, {
                                        text: '[   ]',
                                        border: [true, true, true, true],
                                        fontSize: 8,
                                        alignment: 'center',
                                    }, {
                                        text: 'Facebook Account',
                                        fontSize: 8,
                                        colSpan: 3,
                                        border: [true, false, true, false]
                                    }, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, false, false],
                                        colSpan: 5,
                                    }, {}, {}, {}, {}, {
                                        text: '',
                                        border: [true, false, true, false],
                                    }, {
                                        text: '[   ]',
                                        border: [true, true, true, true],
                                        fontSize: 8,
                                        alignment: 'center',
                                    }, {
                                        text: 'TagLine (For Name card)',
                                        fontSize: 8,
                                        colSpan: 3,
                                        border: [true, false, true, false]
                                    }, {}, {}],
                                    [{
                                        text: 'Name:',
                                        fontSize: 8,
                                        border: [true, false, false, false],
                                    }, {

                                        // text:'',
                                        // border:[true,false, false, false]
                                        text: '_____________________',
                                        fontSize: 8,
                                        bold: false,
                                        border: [false, false, false, false],
                                        colSpan: 2,

                                    }, {


                                    }, {
                                        text: 'Sign:',
                                        fontSize: 8,
                                        border: [false, false, false, false],
                                    }, {
                                        text: '___________',
                                        fontSize: 8,
                                        bold: false,
                                        border: [false, false, false, false]
                                    }, {
                                        text: '',
                                        border: [true, false, true, false],
                                    }, {
                                        text: '[   ]',
                                        border: [true, true, true, true],
                                        fontSize: 8,
                                        alignment: 'center',
                                    }, {
                                        text: 'Others',
                                        fontSize: 8,
                                        colSpan: 3,
                                        border: [true, false, true, false]
                                    }, {

                                    }, {}],
                                    [{
                                        text: '',
                                        border: [true, false, false, false],
                                        colSpan: 5,
                                    }, {}, {}, {}, {}, {
                                        text: '',
                                        colSpan: 2,
                                        border: [true, false, false, false]
                                    }, {}, {
                                        text: '________________________________________',
                                        fontSize: 8,
                                        colSpan: 3,
                                        border: [false, false, true, false]
                                    }, {}, {}],
                                    [{
                                        // text:'',
                                        // border:[true,true,false,false]
                                        text: 'Remarks:',
                                        fontSize: 8,
                                        bold: true,
                                        border: [true, true, false, false],
                                        colSpan: 2,
                                    }, {


                                    }, {
                                        text: '',
                                        border: [false, true, false, false]
                                    }, {
                                        text: "1) Name Card - To request for Tagline, FB Acc, Chinese Name (If Any) & Mobile No.",
                                        fontSize: 8,
                                        colSpan: 7,
                                        border: [false, true, true, false]
                                    }, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        colSpan: 3,
                                        border: [true, false, false, false]
                                    }, {}, {}, {
                                        text: '2) For DGM & above, to get ready the above items by the 1st day of work (if possible).',
                                        fontSize: 8,
                                        colSpan: 7,
                                        border: [false, false, true, false]
                                    }, {}, {}, {}, {}, {}, {}],
                                    [{
                                        colSpan: 10,
                                        text: '',
                                        border: [true, false, true, false]

                                    }, {}, {}, {}, {}, {}, {}, {}, {}, {}],
                                    [{

                                        text: [
                                            'B) ',
                                            { text: 'Orientation', bold: true },
                                            ' (2 times a month : 1st batch 1st-14th of a month, 2nd batch 15-31st of a month)'
                                        ],
                                        colSpan: 10,
                                        fontSize: 9,
                                        border: [true, true, true, false]

                                    }, {}, {}, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false],

                                    }, {
                                        text: '[    ]',
                                        alignment: 'center',
                                        fontSize: 8,

                                    }, {
                                        text: 'Welcoming new hired, take finger print & photo',
                                        fontSize: 8,
                                        colSpan: 8,
                                        border: [true, false, true, false],

                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false],

                                    }, {
                                        text: '[   ]',
                                        fontSize: 8,
                                        border: [true, true, true, true],
                                        alignment: 'center',

                                    }, {
                                        text: 'Orientation briefing - on presentation slide',
                                        fontSize: 8,
                                        colSpan: 8,
                                        border: [true, false, true, false],

                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false],

                                    }, {
                                        text: '[   ]',
                                        border: [true, true, true, true],
                                        alignment: 'center',
                                        fontSize: 8,

                                    }, {
                                        text: "Company's handbook briefing - (HRA folder at desktop)",
                                        colSpan: 8,
                                        fontSize: 8,
                                        border: [true, false, true, false]

                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        colSpan: 2,
                                        border: [true, false, false, false]
                                    }, {}, {
                                        text: '(to advice how to retrieve handbook, and to read within the probationary period).',
                                        italics: true,
                                        fontSize: 8,
                                        colSpan: 8,
                                        border: [false, false, true, false]

                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]

                                    }, {
                                        text: '[   ]',
                                        alignment: 'center',
                                        fontSize: 8,

                                    }, {
                                        text: 'Information on Panel Clinic',
                                        fontSize: 8,
                                        colSpan: 8,
                                        border: [true, false, true, false]
                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: '[   ]',
                                        alignment: 'center',
                                        fontSize: 8,
                                        border: [true, true, true, true],

                                    }, {
                                        text: 'Medical leave - clinic to indicate the type of sickness on Medical Certificate.',
                                        fontSize: 8,
                                        colSpan: 8,
                                        border: [true, false, true, false]
                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: '[   ]',
                                        border: [true, true, true, true],
                                        alignment: 'center',
                                        fontSize: 8,

                                    }, {
                                        text: 'Tardiness - reasonable explanation & evidence (if any)',
                                        fontSize: 8,
                                        colSpan: 8,
                                        border: [true, false, true, false]
                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: '[   ]',
                                        alignment: 'center',
                                        fontSize: 8,

                                    }, {
                                        text: 'Leave form, Claim Form, OT Form, Orientation slide, Handbook -  server',
                                        colSpan: 8,
                                        fontSize: 8,
                                        border: [true, false, true, false]
                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, false, false],

                                    }, {
                                        text: '',
                                        border: [false, false, false, false]

                                    }, {
                                        text: '(HRA folder at desktop)',
                                        colSpan: 8,
                                        fontSize: 8,
                                        italics: true,

                                        border: [false, false, true, false]
                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: '[   ]',
                                        fontSize: 8,
                                        alignment: 'center',

                                    }, {
                                        text: 'Use of telephone & Call out pin number',
                                        border: [true, false, true, false],
                                        colSpan: 8,
                                        fontSize: 8
                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: '[   ]',
                                        alignment: 'center',
                                        fontSize: 8,
                                    }, {
                                        text: 'Quality & Environmental, Safety, Security & Information Technology briefing',
                                        fontSize: 8,
                                        colSpan: 8,
                                        border: [true, false, true, false]
                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: '[   ]',
                                        alignment: 'center',
                                        fontSize: 8,

                                    }, {
                                        text:
                                            [
                                                'Workplace tour',
                                                { text: '(tidiness & cleanliness, save electricity, use of pantry, not to dirty the carpet', italics: true },
                                            ],
                                        colSpan: 8,
                                        fontSize: 8,
                                        border: [true, false, true, false]
                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, false, false]

                                    }, {
                                        text: '',
                                        border: [false, false, false, false]
                                    }, {
                                        text: 'e.g. don’t fill the cup too full of water that cause spillage.)',
                                        colSpan: 8,
                                        italics: true,
                                        fontSize: 8,
                                        border: [false, false, true, false]
                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: '[   ]',
                                        alignment: 'center',
                                        fontSize: 8,
                                        border: [true, true, true, true]

                                    }, {
                                        text: 'Facilities & Benefits provided by the Company',
                                        fontSize: 8,
                                        colSpan: 8,
                                        border: [true, false, true, false]
                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, false, false]
                                    }, {
                                        text: '',
                                        border: [false, false, false, false]
                                    }, {
                                        text: '(e.g. Gym & Shower facilities, massage chair, breakfast, etc)',
                                        italics: true,
                                        colSpan: 8,
                                        fontSize: 8,
                                        border: [false, false, true, false]
                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, false, false]

                                    }, {
                                        text: '[   ]',
                                        fontSize: 8,
                                        alignment: 'center'
                                    }, {
                                        colSpan: 8,
                                        text: [
                                            'Honesty Corner ',
                                            { text: '(pay box, price tag, forms, voucher)', italics: true },
                                        ],
                                        fontSize: 8,
                                        border: [true, false, true, false]
                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]
                                    }, {
                                        text: '[   ]',
                                        alignment: 'center',
                                        fontSize: 8,

                                    }, {
                                        text: [
                                            'Give pin number',
                                            { text: '(employee to save into their mobile), company T-shirt, car sticker.', italics: true },
                                            ' (if required), employee tag'
                                        ],
                                        colSpan: 8,
                                        fontSize: 8,
                                        border: [true, false, true, false]
                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        colSpan: 10,
                                        border: [true, false, true, true]
                                    }, {}, {}, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: [
                                            'C) ',
                                            { text: 'Orientation - Facebook posting', bold: true },
                                            '  (on the first day of commencing job)'
                                        ],
                                        colSpan: 10,
                                        fontSize: 9,
                                        border: [true, true, true, false]
                                    }, {}, {}, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]

                                    }, {
                                        text: '[   ]',
                                        alignment: 'center',
                                        fontSize: 8,

                                    }, {
                                        text: 'Add the newly hired into Facebook Kick-Ass Group',
                                        fontSize: 8,
                                        colSpan: 8,
                                        border: [true, false, true, false]

                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        border: [true, false, true, false]

                                    }, {
                                        text: '[   ]',
                                        fontSize: 8,
                                        alignment: 'center',
                                        border: [true, true, true, true]

                                    }, {
                                        text: 'Post in Kick-Ass to announce on the newly hired ',
                                        fontSize: 8,
                                        colSpan: 8,
                                        border: [true, false, true, false]
                                    }, {}, {}, {}, {}, {}, {}, {}],
                                    [{
                                        text: '',
                                        colSpan: 10,
                                        border: [true, false, true, true]
                                    }, {}, {}, {}, {}, {}, {}, {}, {}, {}],


                                ]
                            }

                        }

                    ],
                    styles: {
                        header: {
                            fontSize: 10,
                            margin: [0, 0, 0, 10]
                        },
                        headerRight: {
                            fontSize: 7,
                            // margin: [0, 1, 0, 1]
                        },
                        subheader: {
                            fontSize: 15,
                            bold: true
                        },
                        quote: {
                            italics: true
                        },
                        small: {
                            fontSize: 8
                        }
                    }

                }
                pdfMake.createPdf(EOC).download(`Employee_Orientation_Checklist_${refNo}.pdf`);
            } catch (error) {
                console.error("Error generating PDF:", error);
                throw error;
            }
        }
    },
    onMounted() {
        if (pdfMake && pdfFonts && pdfFonts.pdfMake && pdfFonts.pdfMake.vfs) {
            pdfMake.vfs = pdfFonts.pdfMake.vfs;
        }
    },
}
</script>