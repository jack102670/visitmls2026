<template>
    <div>
    </div>
</template>
<script>

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { getPersonnelRequisitonForm } from '@/api/EFormApi.js';

export default {
    name: 'PRExportPDF',
    data() {
        return {
            displayPDF: {
                position: '',
                company: '',
                status: '',
                department: '',
                location: '',
                numberPersonnel: '',
                basicSalary: '',
                requisitionPurpose: '',
                manpowerBudget: '',
                dateRequired: '',
                name: '',
                reasonUnbudget: '',
                requestReason: '',
                ageLimit: [null, null], //minAge and MaxAge
                computerLiteracyRequired: "",
                expRequired: "",
                yearsRequired: 0,
                qualificationRequired: "",
                computerSpecification: "",
                ownTransportRequired: "",
                jobCompetency: [],
                disciplineSpecification: "",
                personalCompetency: [],
                others: "",
                requesterName: "",
                requesterDept: "",
                requesterDesignation: "",
                dateRequested: "",
                verifier1: {
                    name: '',
                    designation: '',
                    dept: '',
                    date: ''
                },
                verifier2: {
                    name: '',
                    designation: '',
                    dept: '',
                    date: '',
                },
                hrd: {
                    name:'',
                    date:'',
                    actionBy:'',
                    dateBy: '',
                    positionBy: '',
                    dateJoined: '',
                }
            },
            minAge: "",
            maxAge: "",
            DisplayForm: {
                status: '',

            },
        }
    },
    computed: {
        formattedDateRequested() {
            if (!this.displayPDF.dateRequested) return "";
            const date = new Date(this.displayPDF.dateRequested);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },

        formattedVerifier1Date(){
            if (!this.displayPDF.verifier1.date) return "";
            const date = new Date(this.displayPDF.verifier1.date);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },
        formattedVerifier2Date(){
            if (!this.displayPDF.verifier2.date) return "";
            const date = new Date(this.displayPDF.verifier2.date);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }
    },
    methods: {

        async getPersonnelRequisitonForm(refNo) {

            try {
                const data = await getPersonnelRequisitonForm(refNo);
                if (data) {
                    this.displayPDF = {
                        ...data.displayPDF,
                        ...data,
                    };
                    if (this.displayPDF.ageLimit) {
                        const [min, max] = this.displayPDF.ageLimit.split('-');
                        this.minAge = min;
                        this.maxAge = max;
                    }
                }
            } catch (error) {
                console.error("Error loading Personnel requisition section B:", error);
                throw error;
            }

        },
        async generatePRPDF(refNo) {
            try {
                await this.getPersonnelRequisitonForm(refNo);

                const {
                    position,
                    company,
                    status,
                    dateRequired,
                    department,
                    location,
                    numberPersonnel,
                    basicSalary,
                    requisitionPurpose,
                    manpowerBudget,
                    name,
                    reasonUnbudget,
                    requestReason,
                    ageLimit,
                    computerLiteracyRequired,
                    expRequired,
                    yearsRequired,
                    qualificationRequired,
                    computerSpecification,
                    ownTransportRequired,
                    jobCompetency,
                    disciplineSpecification,
                    personalCompetency,
                    others,
                    requesterName,
                    requesterDept,
                    requesterDesignation,
                    dateRequested,
                } = this.displayPDF;

                const checkmark = (condition) => (condition ? '[  /  ]' : '[     ]')

                const newRecruitmentChecked = checkmark(requisitionPurpose === 'newRecruitment');
                const temporaryChecked = checkmark(requisitionPurpose === 'temporary');
                const replacementChecked = checkmark(requisitionPurpose === 'replacement');

                const manpowerBudgetChecked = checkmark(manpowerBudget === 'budgeted');
                const manpowerUnbudgetedChecked = checkmark(manpowerBudget === 'unbudgeted');

                const expRequiredChecked = checkmark(expRequired === 'yes');
                const expRequiredCheckedNo = checkmark(expRequired === 'no');

                const qualificationRequiredSpm = checkmark(qualificationRequired === 'spm');
                const qualificationRequiredDiploma = checkmark(qualificationRequired === 'diploma');

                const computerLiteracyRequiredYes = checkmark(computerLiteracyRequired === 'yes');
                const computerLiteracyRequiredNo = checkmark(computerLiteracyRequired === 'no');

                const ownTransportRequiredYes = checkmark(ownTransportRequired === 'yes');
                const ownTransportRequiredNo = checkmark(ownTransportRequired === 'no');


                const PRPDF = {
                    header: {
                        stack: [
                            {
                                columns: [
                                    { text: 'PKT GROUP COMPANIES', style: 'header' },
                                    {
                                        stack: [
                                            { text: 'PKT-FR06, Rev05, E/D 120824', style: 'headerRight', alignment: 'right' },

                                        ]
                                    }
                                ]
                            }
                        ],
                        margin: [40, 10, 40, 10]
                    },
                    content: [
                        {
                            style: 'tableStyle',
                            table: {
                                widths: ['50%', '15%', '20%', '15%'],
                                body: [
                                    [
                                        {
                                            text: '', alignment: 'right', fontSize: 9,
                                        },
                                        {
                                            text: 'Date Received:', alignment: 'left', fontSize: 9,
                                        },
                                        {
                                            text: '_______________________', alignment: 'left', fontSize: 9,
                                        },
                                        {
                                            text: '(For HRD used)', alignment: 'left', fontSize: 9,
                                        },
                                    ]
                                ],
                            },
                            layout: 'noBorders',
                        },
                        {
                            text: 'PERSONNEL REQUISITION FORM', alignment: 'center', bold: true, fontSize: 14, margin: [0, 10, 0, 5]
                        },
                        {
                            style: 'PrTable',
                            table: {
                                widths: ['16%', '16.6%', '16.6%', '16.6%', '16.6%', '16.6%'],
                                body: [
                                    [
                                        {
                                            text: 'A. POSITION REQUIREMENTS',
                                            colSpan: 6,
                                            alignment: 'center',
                                            bold: true,
                                            fontSize: 12,
                                            fillColor: '#E6E6E6'


                                        }, {}, {}, {}, {}, {}
                                    ],
                                    [
                                    {
                                        text: 'POSITION TO BE FILLED:',
                                        fontSize: 8,
                                        bold: true,
                                        border: [true, false, false, false],
                                    }, {
                                        text: position || '____________________________________________',
                                        fontSize: 8,
                                        bold: false,
                                        colSpan: 2,
                                        border: [false, false, false, false]
                                    }, {

                                    }, {
                                        text: 'COMPANY :',
                                        fontSize: 8,
                                        bold: true,
                                        
                                        border: [false, false, false, false]
                                    }, {
                                        text: company || '__________________________________________',
                                        fontSize: 8,
                                        colSpan: 2,
                                        bold: false,
                                        border: [false, false, true, false]
                                    }, {
                                        
                                    }
                                ],
                                 [
                                    {
                                        text: 'DEPARTMENT :',
                                        fontSize: 8,
                                        bold: true,
                                        border: [true, false, false, false],
                                    }, {
                                        text: department || '____________________________________________',
                                        fontSize: 8,
                                        bold: false,
                                        colSpan: 2,
                                        border: [false, false, false, false]
                                    }, {

                                    }, {
                                        text: 'LOCATION :',
                                        fontSize: 8,
                                        bold: true,
                                        
                                        border: [false, false, false, false]
                                    }, {
                                        text: location || '__________________________________________',
                                        fontSize: 8,
                                        colSpan: 2,
                                        bold: false,
                                        border: [false, false, true, false]
                                    }, {
                                        
                                    }
                                ],
                                    [
                                        {
                                            text: 'DATE REQUIRE:',
                                            fontSize: 8,
                                            bold: true,
                                            border: [true, false, false, false],


                                        }, {
                                            text: dateRequired || '_____________________',
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, false]
                                        }, {
                                            text: 'NO. OF PERSONNEL REQUIRED:',
                                            fontSize: 8,
                                            bold: true,
                                            border: [false, false, false, false],
                                        }, {
                                            text: numberPersonnel || '_____________________',
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, false]
                                        }, {
                                            text: 'BASIC SALARY PROPOSE:',
                                            fontSize: 8,
                                            bold: true,
                                            border: [false, false, false, false],
                                        }, {
                                            text: basicSalary || '_____________________',
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, true, false]
                                        }
                                    ],
                                    [
                                        {
                                            text: '1. Requisition if for: ',
                                            fontSize: 8,
                                            bold: true,
                                            colSpan: 6,
                                            border: [true, true, true, false],
                                        }, {}, {}, {}, {}, {}
                                    ],
                                    [
                                        {
                                            text: ` ${newRecruitmentChecked} New Reqruitment`,
                                            fontSize: 8,
                                            bold: false,
                                            border: [true, false, false, false],

                                        }, {
                                            text: `${temporaryChecked} Temporary`,
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, false],
                                        }, {
                                            text: `${replacementChecked} Replacement:-`,
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, false],
                                        }, {
                                            text: 'Name of Person to be replaced: ',
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, false],
                                        }, {
                                            text: name || '____________________________________________',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [false, false, true, false],
                                        }, {}
                                    ],
                                    [
                                        {
                                            text: '2. Manpower Request is: ',
                                            fontSize: 8,
                                            bold: true,
                                            colSpan: 6,
                                            border: [true, false, true, false],
                                        }, {}, {}, {}, {}, {}
                                    ],
                                    [
                                        {
                                            text: `${manpowerBudgetChecked} Budgeted`,
                                            fontSize: 8,
                                            bold: false,
                                            border: [true, false, false, false],
                                        }, {
                                            text: `${manpowerUnbudgetedChecked} Unbudget`,
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, false],
                                        }, {
                                            text: 'Reason for Unbudget:',
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, false],
                                        }, {
                                            text: reasonUnbudget || '-',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 3,
                                            border: [false, false, true, false],
                                        }, {

                                        }, {}
                                    ],
                                    [
                                        {
                                            text: '*Kindly attach Job Description and Organization chart. ',
                                            fontSize: 8,
                                            bold: true,
                                            colSpan: 6,
                                            border: [true, false, true, false],
                                        }, {}, {}, {}, {}, {}
                                    ],
                                    [
                                        {
                                            text: 'Justification / Reason for Request: ',
                                            fontSize: 8,
                                            bold: true,
                                            colSpan: 6,
                                            border: [true, true, true, false],
                                        }, {}, {}, {}, {}, {}
                                    ],
                                    [
                                        {
                                            text: requestReason || '-',
                                            fontSize: 8,
                                            bold: true,
                                            colSpan: 6,
                                            border: [true, false, true, false],
                                        }, {}, {}, {}, {}, {}
                                    ],
                                    [
                                        {
                                            text: 'PERSON SPECIFICATION ',
                                            alignment: 'center',
                                            bold: true,
                                            fontSize: 12,
                                            colSpan: 6,
                                            fillColor: '#E6E6E6'

                                        }, {}, {}, {}, {}, {}
                                    ],
                                    [
                                        {
                                            text: '1. Age / Age limit:',
                                            bold: true,
                                            fontSize: 8,
                                            border: [true, false, false, false],

                                        }, {
                                            text: `${this.minAge || '-'} - ${this.maxAge || '-'}`,
                                            bold: false,
                                            fontSize: 8,
                                            colSpan: 5,
                                            border: [false, false, true, false],
                                        }, {}, {}, {}, {}
                                    ],
                                    [
                                        {
                                            text: '2. Experience Required?',
                                            bold: true,
                                            fontSize: 8,
                                            border: [true, false, false, false],

                                        }, {
                                            text: `${expRequiredChecked} Yes`,
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, false],
                                        }, {
                                            text: `${expRequiredCheckedNo} No`,
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, false],
                                        }, {
                                            text: 'If Yes, No of Years:',
                                            fontSize: 8,
                                            bold: true,
                                            border: [false, false, false, false],
                                        }, {
                                            text: yearsRequired || '-',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [false, false, true, false],
                                        }, {}
                                    ],
                                    [
                                        {
                                            text: '3. Qualification Required:',
                                            fontSize: 8,
                                            bold: true,
                                            border: [true, false, false, false],

                                        }, {
                                            text: `${qualificationRequiredSpm} SPM/SPVM/STPM`,
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, false],
                                        }, {
                                            text: `${qualificationRequiredDiploma} Diploma/Degree`,
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [false, false, false, false],
                                        }, {
                                            
                                        }, {
                                            text: 'Please Specify Discipline:',
                                            fontSize: 8,
                                            bold: true,
                                            border: [false, false, false, false],
                                        }, {
                                            text: disciplineSpecification.replace(/,/g, ', ') || '_____________________',
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, true, false],
                                        }
                                    ],
                                    [
                                        {
                                            text: '4. Computer literacy?',
                                            fontSize: 8,
                                            bold: true,
                                            border: [true, false, false, false],

                                        }, {
                                            text: `${computerLiteracyRequiredYes} Yes`,
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, false],
                                        }, {
                                            text: `${computerLiteracyRequiredNo} No`,
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, false],
                                        }, {
                                            text: 'If Yes, Please specify:',
                                            fontSize: 8,
                                            bold: true,
                                            border: [false, false, false, false],
                                        }, {
                                            text: computerSpecification || '____________________________________________',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [false, false, true, false],
                                        }, {}
                                    ],
                                    [
                                        {
                                            text: '5. Posses Own transport?',
                                            fontSize: 8,
                                            bold: true,
                                            border: [true, false, false, false],

                                        }, {
                                            text: `${ownTransportRequiredYes} Yes`,
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, false],
                                        }, {
                                            text: `${ownTransportRequiredNo} No`,
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 4,
                                            border: [false, false, true, false],
                                        }, {}, {}, {}
                                    ],
                                    [
                                        {
                                            colSpan: 6,
                                            border: [true, false, true, false],
                                            stack: [
                                                {
                                                    text: [
                                                        {
                                                            text: '6. List of functional / technical job competencies required: ',
                                                            fontSize: 8,
                                                            bold: true
                                                        },
                                                        {
                                                            text: 'e.g Selling/Accounting/Debtors Control/IT Management etc.',
                                                            fontSize: 8,
                                                            bold: true,
                                                            italics: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {}, {}, {}, {}, {}
                                    ],
                                    [
                                        {
                                            text: jobCompetency.join(', ') ,
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 6,
                                            border: [true, false, true, false],

                                        }, {}, {}, {}, {}, {}
                                    ],
                                    [
                                        {
                                            text: [
                                                {
                                                    text: '7. List of personal competencies required: ',
                                                    fontSize: 8,
                                                    bold: true,
                                                },
                                                {
                                                    text: 'e.g Leadership/Perseverance/Customer Driven/Interpersonal Skills etc.',
                                                    fontSize: 8,
                                                    italics: true
                                                }
                                            ],
                                            colSpan: 6,
                                            border: [true, false, true, false]
                                        },
                                        {}, {}, {}, {}, {}
                                    ],
                                    [
                                        {
                                            text: personalCompetency.join(', ') ,
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 6,
                                            border: [true, false, true, false],

                                        }, {}, {}, {}, {}, {}
                                    ],
                                    [
                                        {
                                            text: '8. Others, Please specify: ',
                                            fontSize: 8,
                                            bold: true,
                                            colSpan:2,
                                            border: [true, false, false, false],

                                        }, {}, {
                                            text:'',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 4,
                                            border: [false, false, true, false],
                                        }, {}, {}, {}
                                    ],
                                    [
                                        {
                                            text: others ||'__________________________________________________________ ',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 6,
                                            border: [true, false, true, false],

                                        }, {}, {}, {}, {}, {}
                                    ],
                                    [
                                        {
                                            text: 'C. VERIFICATION / APPROVAL ',
                                            alignment: 'center',
                                            bold: true,
                                            fontSize: 12,
                                            colSpan: 6,
                                            fillColor: '#E6E6E6'

                                        }, {}, {}, {}, {}, {}
                                    ],
                                    [
                                        {
                                            text: '1. REQUESTED BY: ',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 3,
                                            border: [true, false, true, false],

                                        }, {}, {}, {
                                            text: '2. VERIFIED BY: ',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 3,
                                            border: [false, false, true, false],
                                        }, {}, {}
                                    ],
                                    [
                                        {
                                            text: '__________________________________________',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [true, false, false, false],

                                        }, {}, {
                                            text: `${this.formattedDateRequested || '-'}`,
                                            fontSize: 8,
                                            alignment: 'center',
                                            bold: false,
                                            border: [false, false, true, false],
                                        }, {
                                            text: '__________________________________________',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [true, false, false, false],
                                        }, {}, {
                                            text: `${this.formattedVerifier1Date || '-'}`,
                                            fontSize: 8,
                                            bold: false,
                                            alignment: 'center',
                                            border: [false, false, true, false],
                                        }
                                    ],
                                    [
                                        {
                                            text: `NAME: ${requesterName}  `,
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [true, false, false, false],

                                        }, {}, {
                                            
                                            text: `DATE `,
                                            fontSize: 8,
                                            bold: false,
                                            alignment: 'center',
                                            border: [false, false, true, false],
                                        }, {
                                            text: `NAME:    ${this.displayPDF.verifier1.name || '-'}`,
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [true, false, false, false],
                                        }, {}, {
                                            text: 'DATE',
                                            fontSize: 8,
                                            bold: false,
                                            alignment: 'center',
                                            border: [false, false, true, false],
                                        }
                                    ],
                                    [
                                        {
                                            text:`DESIGNATION: ${requesterDesignation}`,
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 3,
                                            border: [true, false, true, false],

                                        }, {}, {}, {
                                            text: 'DEPARTMENT HEAD',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 3,
                                            border: [true, false, true, false],
                                        }, {}, {}
                                    ],
                                    [
                                        {
                                            text: '3. VERIFIED BY: ',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 3,
                                            border: [true, true, true, false],

                                        }, {}, {}, {
                                            text: '4. APPROVED BY: ',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 3,
                                            border: [true, true, true, false],
                                        }, {}, {}
                                    ],
                                    [
                                        {
                                            text: '____________________________________________',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [true, false, false, false],

                                        }, {}, {
                                            text: `${this.formattedVerifier2Date|| '-'}`,
                                            fontSize: 8,
                                            bold: false,
                                            alignment: 'center',
                                            border: [false, false, true, false],
                                        }, {
                                            text: '____________________________________________',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [true, false, false, false],
                                        }, {}, {
                                            text: '_____________________',
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, true, false],
                                        }
                                    ],
                                    [
                                        {
                                            text: 'DIVISION HEAD',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [true, false, false, false],

                                        }, {}, {
                                            text: 'DATE',
                                            fontSize: 8,
                                            bold: false,
                                            alignment: 'center',
                                            border: [false, false, true, false],
                                        }, {
                                            text: 'GROUP PRESIDENT / CEO / CHRO / HR',
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [true, false, false, false],
                                        }, {}, {
                                            text: 'DATE',
                                            fontSize: 8,
                                            bold: false,
                                            alignment: 'center',
                                            border: [false, false, true, false],
                                        }
                                    ],
                                    [
                                        {
                                            text: 'CHECKED BY HRD',
                                            fontSize: 8,
                                            bold: true,
                                            colSpan: 6,
                                            italics: true,
                                            border: [true, true, true, false],
                                        }, {}, {}, {}, {}, {}
                                    ],
                                    [
                                        {
                                            text: 'NAME: ',
                                            fontSize: 8,
                                            bold: false,
                                            border: [true, false, false, false],
                                        },
                                        {
                                            text: `${this.displayPDF.hrd.name || '-'}`,
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [false, false, false, false],
                                        }, {}, {
                                            text: 'DATE: ',
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, false],
                                        }, {
                                            text: `${this.displayPDF.hrd.date || '-'}`,
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [false, false, true, false],
                                        }, {}
                                    ],
                                    [
                                        {
                                            text: 'ACTION BY: ',
                                            fontSize: 8,
                                            bold: false,
                                            border: [true, false, false, false],
                                        },
                                        {
                                            text: `${this.displayPDF.hrd.actionBy || '-'}`,
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [false, false, false, false],
                                        }, {}, {
                                            text: 'DATE: ',
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, false],
                                        }, {
                                            text: `${this.displayPDF.hrd.dateBy || '-'}`,
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [false, false, true, false],
                                        }, {}
                                    ],
                                    [
                                        {
                                            text: 'POSITION FILLED BY: ',
                                            fontSize: 8,
                                            bold: false,
                                            border: [true, false, false, true],
                                        },
                                        {
                                            text: `${this.displayPDF.hrd.positionBy || '-'}`,
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [false, false, false, true],
                                        }, {}, {
                                            text: 'DATE JOINED/REMARKS: ',
                                            fontSize: 8,
                                            bold: false,
                                            border: [false, false, false, true],
                                        }, {
                                            text: `${this.displayPDF.hrd.dateJoined || '-'}`,
                                            fontSize: 8,
                                            bold: false,
                                            colSpan: 2,
                                            border: [false, false, true, true],
                                        }, {}
                                    ],
                                ]
                            }
                        },
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
                };
                pdfMake.createPdf(PRPDF).download(`Personnel_Requisition_${refNo}.pdf`);
            } catch (error) {
                console.error("Error generating PDF:", error);
            }
        }
    },
    beforeMount() {
        if (pdfMake && pdfFonts && pdfFonts.pdfMake && pdfFonts.pdfMake.vfs) {
            pdfMake.vfs = pdfFonts.pdfMake.vfs;
        } else {
            console.error("Error: pdfMake or pdfFonts is not properly loaded");
        }
    },
};
</script>