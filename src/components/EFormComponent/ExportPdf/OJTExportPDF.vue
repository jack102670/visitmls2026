<template>
    <div></div>
</template>

<script>
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { getOnJobTraining } from '@/api/EFormApi.js';

export default {
    name: 'OJTExportPDF',
    data() {
        return {
            displayPDF: {
                staffName: '',
                company: "",
                department: '',
                dateJoined: '',
                hrDateFinish: '',
                dateRequested: '',
                formType: '',
                requesterVerification: '',
                requesterName: '',
                requesterDept: '',
                requesterDesignation: '',
                descriptions: [],
                achieveTarget: '',
                reasonifNo: '',
                name: '',
                hodDate: '',
                hodName: '',
                trainerVerification: '',
                hrVerification: '',
            },
            hrDateStart: '',
            hrDateEnd: '',
            staffDateStart: null,
            staffDateEnd: null,
            bulletPointsArray: [],
            status: '',
        }
    },
    computed: {
        formattedHodDate() {
            if (this.displayPDF.hodDate) {
                const date = new Date(this.displayPDF.hodDate);
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}/${month}/${day}`;
            }
            return '';
        },
    },
    methods: {
        async getOnJobTraining(refNo) {
            try {
                const data = await getOnJobTraining(refNo);
                if (data) {
                    this.displayPDF = {
                        ...data.displayPDF,
                        ...data,
                    };
                    this.status = data.status;

                    if (this.displayPDF.hrDateFinish) {
                        const [hrDateStart, hrDateEnd] = this.displayPDF.hrDateFinish.split(' - ').map(date => date.trim());
                        this.hrDateStart = hrDateStart;
                        this.hrDateEnd = hrDateEnd;

                        this.displayPDF.hrDateStart = hrDateStart;
                        this.displayPDF.hrDateEnd = hrDateEnd;
                    }
                    if (this.displayPDF.staffDateFinish) {
                        const [staffDateStart, staffDateEnd] = this.displayPDF.staffDateFinish.split(' - ').map(date => date.trim());
                        this.staffDateStart = staffDateStart;
                        this.staffDateEnd = staffDateEnd;

                        this.displayPDF.staffDateStart = staffDateStart;
                        this.displayPDF.staffDateEnd = staffDateEnd;
                    }
                    if (Array.isArray(data.descriptions)) {
                        this.bulletPointsArray = data.descriptions;
                    } else {
                        this.bulletPointsArray = ['No descriptions available.'];
                    }
                } else {
                    console.warn("No data retrieved for refNo:", refNo);
                }
            } catch (error) {
                console.error("Error fetching On Job Training data:", error);
                throw error;
            }
        },

        async generateOJTPDF(refNo) {
            try {
                await this.getOnJobTraining(refNo);

                const {
                    staffName,
                    company,
                    dateJoined,
                    formType,
                    requesterVerification,
                    achieveTarget,
                    reasonifNo,
                    hodName,
                    trainerVerification,
                    hrDateStart,
                    hrDateEnd,
                    staffDateStart,
                    staffDateEnd,
                    status,
                    hrVerification,
                } = this.displayPDF;
                const OJTPDF = {
                    header: {
                        stack: [
                            {
                                columns: [
                                    {
                                        text: 'PKT GROUP COMPANIES',
                                        alignment: 'left',
                                        style: 'header',
                                        width: '73%'
                                    },
                                    {
                                        width: '*',
                                        alignment: 'right',
                                        stack: [
                                            {
                                                text: [
                                                    { text: 'FORM NO:', style: 'headerRight' },
                                                    { text: '                         ', style: 'headerRight' },
                                                    { text: 'PKT-FR13', style: 'headerRight' }
                                                ]
                                            },
                                            {
                                                text: [
                                                    { text: 'REV NO:', style: 'headerRight' },
                                                    { text: '                                      ', style: 'headerRight' },
                                                    { text: '02', style: 'headerRight' }
                                                ]
                                            },
                                            {
                                                text: [
                                                    { text: 'Effective Date:', style: 'headerRight' },
                                                    { text: '    ', style: 'headerRight' },
                                                    { text: '19th September 2017', style: 'headerRight' }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                margin: [40, 10, 40, 0],
                            }
                        ]

                    },
                    content: [
                        {
                            style: 'tableObjectives',
                            table: {
                                widths: ['20%', '40%', '20%', '20%'],
                                body: [
                                    [
                                        {
                                            text: 'FAMILIARISATION PROGRAMME/ON JOB TRAINING',
                                            alignment: 'center',
                                            bold: true,
                                            fontSize: 14,
                                            border: [true, true, true, true],
                                            fillColor: '#E6E6E6',
                                            colSpan: 4

                                        },
                                        {}, {}, {}
                                    ],
                                    [
                                        { text: '1. Name of staff:', fontSize: 10, alignment: 'left', bold: true, border: [true, false, false, false] },
                                        { text: staffName || ' ', fontSize: 10, alignment: 'left', border: [false, false, false, false], width: '40%' },
                                        { text: formType === 'familiarisation' ? '[   /   ]' : '[        ]', fontSize: 9, alignment: 'center', bold: false, border: [false, false, false, false] },
                                        { text: 'Familiriasation Prog.', fontSize: 10, alignment: 'left', border: [false, true, true, false] }
                                    ],
                                    [
                                        { text: '2. Date Joined: ', fontSize: 10, alignment: 'left', bold: true, border: [true, false, false, false] },
                                        { text: dateJoined || ' - ', fontSize: 10, alignment: 'left', bold: false, border: [false, false, false, false] },
                                        { text: formType === 'onJobTraining' ? '[   /   ]' : '[        ]', fontSize: 9, alignment: 'center', bold: false, border: [false, false, false, false] },
                                        { text: 'On Job Training', fontSize: 10, alignment: 'left', bold: false, border: [false, false, true, false] }
                                    ],
                                    [
                                        { text: '3. Company: ', fontSize: 10, alignment: 'left', bold: true, border: [true, false, false, false] },
                                        { text: company || ' ', fontSize: 10, alignment: 'left', bold: false, border: [false, false, false, false] },
                                        { text: ' ', fontSize: 10, alignment: 'left', bold: true, border: [false, false, false, false] },
                                        { text: ' ', fontSize: 10, alignment: 'left', bold: true, border: [false, false, true, false] },
                                    ],

                                    [
                                        { text: 'Date / Duration', fontSize: 10, alignment: 'center', bold: true, border: [true, true, true, true], fillColor: '#E6E6E6' },
                                        { text: 'Description', fontSize: 10, alignment: 'center', bold: true, border: [true, true, true, true], fillColor: '#E6E6E6' },
                                        { text: 'Trainer Verification', fontSize: 10, alignment: 'center', bold: true, border: [true, true, true, true], fillColor: '#E6E6E6' },
                                        { text: 'Trainee Acknoledgement', fontSize: 10, alignment: 'center', bold: true, border: [true, true, true, true], fillColor: '#E6E6E6' }
                                    ],
                                    [
                                        { text: `${hrDateStart} - ${hrDateEnd}` || ' ', fontSize: 10, alignment: 'left', border: [true, true, true, true], bold: false },
                                        { text: '1. Introduction to the company\n 2. ISO induction & Policies (QMS, EMS)\n 3. ICT Policy Briefing.\n 4.Health, Safety & Enivronmental Policy Briefing.\n 5. Security Policy Briefing. ', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
                                        { text: hrVerification === '' ? ' Not Verified' : 'Verified', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
                                        { text: requesterVerification === 'True' ? ' Verified' : 'Not Verified', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
                                    ],
                                    [
                                        { text: `${staffDateStart} - ${staffDateEnd}` || ' ', fontSize: 10, alignment: 'left', border: [true, true, true, true], bold: false },
                                        {
                                            text: [
                                                { text: 'On Job Training (Kindly Describe):', fontSize: 10, alignment: 'left', decoration: 'underline', margin: [0, 0, 0, 10] },
                                                '\n',
                                                ...this.bulletPointsArray.map((point) => ({ text: `• ${point}\n`, fontSize: 10, alignment: 'justify' })),
                                            ],
                                            border: [true, true, true, true],
                                        },
                                        {
                                            text: (status === 'Completed by Superior. Waiting for HR' || status === 'Completed by HR') ? 'Verified' : (status !== '' ? 'Verified' : 'Not Verified'),
                                            fontSize: 10,
                                            alignment: 'left',
                                            border: [true, true, true, true]
                                        },
                                        { text: requesterVerification === 'True' ? ' Verified' : 'Not Verified', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
                                    ],

                                ]
                            },
                            layout: {
                                hLineWidth: function (i, node) {
                                    return 0.5;
                                },
                                vLineWidth: function (i, node) {
                                    return 0.5;
                                },
                                paddingLeft: function (i, node) {
                                    return 4;
                                },
                                paddingRight: function (i, node) {
                                    return 4;
                                },
                                paddingTop: function (i, node) {
                                    return 4;
                                },
                                paddingBottom: function (i, node) {
                                    return 4;
                                }
                            }
                        },
                        {
                            style: 'RemarksText',
                            text: 'Remarks'
                        },
                        {
                            style: 'RemarksTextDescription',
                            text:
                                'Employee to be evaluated within 3 months from the commencement of familiarisation / training programme.',
                        },
                        {
                            fontSize: 10,
                            margin: [0, 10, 0, 2],
                            text: ['1. Has the employee achieved the level of knowledge & skills required for the job?: ',
                                { text: achieveTarget === 'yes' ? 'Yes' : 'No', bold: true },
                            ]
                        },
                        {

                            fontSize: 10,
                            text: '2. If the answer is No, What are the actions to be taken?:',
                        },
                        {

                            margin: [0, 2, 0, 2],
                            text: [
                                { text: reasonifNo || '-', color: '#000000', fontSize: 10, bold: false, margin: [0, 4, 0, 2], },

                            ],
                            fontSize: 10
                        },
                        {
                            style: '',
                            table: {
                                widths: ['21%', '80%'],
                                body: [
                                    [
                                        {
                                            text: 'Superior Verification:',
                                            fontSize: 10,
                                            bold: true
                                        },
                                        {
                                            text: '____________________________________________',
                                            fontSize: 10,
                                            bold: false
                                        }
                                    ],
                                    [
                                        {
                                            text: '',
                                            fontSize: 10,
                                            bold: false
                                        },
                                        {
                                            text: `Name: ${hodName || '-'}`,
                                            fontSize: 10,
                                            bold: false
                                        }
                                    ],
                                    [
                                        {
                                            text: '',
                                            fontSize: 10,
                                            bold: false
                                        },
                                        {
                                            text: `Date: ${this.formattedHodDate || '-'} `,
                                            fontSize: 10,
                                            bold: false
                                        }
                                    ]
                                ]
                            },
                            layout: 'noBorders',
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
                        tableObjectives: {
                            margin: [0, 5, 0, 15]
                        },
                        RemarksTextDescription: {
                            fontSize: 10,
                            bold: true,
                        },
                        RemarksText: {
                            fontSize: 10,
                            bold: true,
                            margin: [0, 0, 0, 2]
                        },
                    }
                };
                pdfMake.createPdf(OJTPDF).download(`On_Job_Training_${refNo}.pdf`);
            }
            catch (error) {
                console.error("Error generating PDF:", error);
                throw error;
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