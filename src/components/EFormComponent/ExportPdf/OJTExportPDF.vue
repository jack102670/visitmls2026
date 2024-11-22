<template>
    <div></div>
</template>

<script>
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

export default {
    name: 'OJTExportPDF',
    methods: {
        generateOJTPDF(application) {
            const OJTPDF = {
                header: {
                    stack: [
                        {
                            columns: [
                                { text: 'PKT GROUP COMPANIES', style: 'header' },
                                {
                                    stack: [
                                        { text: 'FORM NO: PKT-FR13', style: 'headerRight', alignment: 'right' },
                                        { text: 'REV NO: 02', style: 'headerRight', alignment: 'right' },
                                        { text: 'Effective Date: 13th October 2024', style: 'headerRight', alignment: 'right' }
                                    ]
                                }
                            ]
                        }
                    ],
                    margin: [40, 10, 40, 10]
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
                                    { text: '1. Name of staff:', fontSize: 10, alignment: 'left', bold: true, border: [true, false, false, true] },
                                    { text: '', fontSize: 10, alignment: 'left', border: [false, false, false, true], width: '40%' },
                                    { text: '[   ]', fontSize: 10, alignment: 'center', bold: true, border: [false, false, false, true] },
                                    { text: 'Familiriasation Prog.', fontSize: 10, alignment: 'left', border: [false, true, true, true] }
                                ],
                                [
                                    { text: '2. Date Joined: ', fontSize: 10, alignment: 'left', bold: true, border: [true, false, false, false] },
                                    { text: '', fontSize: 10, alignment: 'left', bold: true, border: [false, false, false, false] },
                                    { text: '[   ]', fontSize: 10, alignment: 'center', bold: true, border: [false, false, false, false] },
                                    { text: 'On Job Training', fontSize: 10, alignment: 'left', bold: false, border: [false, false, true, false] }
                                ],
                                [
                                    { text: '3. Company: ', colSpan: 4, fontSize: 10, alignment: 'left', bold: true, border: [true, true, true, true] },
                                    { text: ' ', fontSize: 10, alignment: 'left', bold: true, border: [true, true, true, true] },
                                    { text: ' ', fontSize: 10, alignment: 'left', bold: true, border: [true, true, true, true] },
                                    { text: ' ', fontSize: 10, alignment: 'left', bold: true, border: [false, true, true, true] },
                                ],

                                [
                                    { text: 'Date / Duration', fontSize: 10, alignment: 'center', bold: true, border: [true, true, true, true], fillColor: '#E6E6E6' },
                                    { text: 'Description', fontSize: 10, alignment: 'center', bold: true, border: [true, true, true, true], fillColor: '#E6E6E6' },
                                    { text: 'Trainer Verification', fontSize: 10, alignment: 'center', bold: true, border: [true, true, true, true], fillColor: '#E6E6E6' },
                                    { text: 'Trainee Acknoledgement', fontSize: 10, alignment: 'center', bold: true, border: [true, true, true, true], fillColor: '#E6E6E6' }
                                ],
                                [
                                    { text: '', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
                                    { text: '1. Introduction to the company\n 2. ISO induction & Policies (QMS, EMS)\n 3. ICT Policy Briefing.\n 4.Health, Safety & Enivronmental Policy Briefing.\n 5. Security Policy Briefing. ', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
                                    { text: '', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
                                    { text: '', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
                                ],
                                [
                                    { text: '', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
                                    {
                                        text: [
                                            { text: 'On Job Training, (Kindly Describe)', fontSize: 10, alignment: 'left', decoration: 'underline' },
                                            '\n',
                                            { text: 's', fontSize: 10, alignment: 'left' }
                                        ],
                                        border: [true, true, true, true]
                                    }
                                    ,
                                    { text: '', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
                                    { text: '', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
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
                        text: 'Employee to be evaluated within 3 months from the commencement of familiarisation / training programme.'
                    },
                    {
                        style: 'textQuestions',
                        text: '1. Has the employee achieved the level of knowledge & skills required for the job?:\n 2. If the answer is No, What are the actions to be taken?:'
                    },
                    {
                        style: 'textAnswer',
                        text: [
                            { text: '______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________', color: '#000000' },
                            '\n',
                            { text: '(Please fill in above)', italics: true, fontSize: 8, color: '#A9A9A9' }
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
                                        text: 'Name: ',
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
                                        text: 'Date: ',
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
                    SectionATitle: {
                        fontSize: 12,
                        bold: true,
                        decoration: 'underline',
                        margin: [0, -8, 0, 4],
                    },
                    header: {
                        fontSize: 10,
                        margin: [0, 0, 0, 10]
                    },
                    headerRight: {
                        fontSize: 7,
                        // margin: [0, 1, 0, 1]
                    },
                    subheader: {
                        fontSize: 16,
                        bold: true,
                        margin: [0, 10, 0, 5]
                    },
                    TableTitle: {
                        margin: [0, 5, 0, 15]
                    },
                    tableIntroduction: {
                        margin: [0, 5, 0, 15]
                    },
                    tableObjectives: {
                        margin: [0, 5, 0, 15]
                    },
                    TableBenefitGained: {
                        margin: [0, 5, 0, 15]
                    },
                    tableSignature: {
                        margin: [0, 5, 0, 13]
                    },
                    TableGeneralComment: {
                        margin: [0, 5, 0, 15]
                    },
                    RemarksTextDescription: {
                        fontSize: 10,
                        bold: true,
                    },
                    RemarksText: {
                        fontSize: 12,
                        bold: true,
                        decoration: 'underline',
                    },
                    textQuestions: {
                        fontSize: 10,
                        margin: [0, 10, 0, 0],
                        bold: false,
                    }
                }
            };
            pdfMake.createPdf(OJTPDF).download('testOJT.pdf');
        },
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