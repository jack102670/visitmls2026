<template>
    <div></div>
</template>
<script>
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { getJobDescription, getPersonnelRequisitonForm } from '@/api/EFormApi.js'

export default {

    name: 'JDExportPDF',
    data() {
        return {

            displayPDF: {
                dateRequested: "",
                refNo:"",
                company: "",
                department: "",
                designation: "",
                reportTo: "",
                responsibility: [],
                duty: [],
                experience: [],
                education: [],
                skills: [],
                requesterName: "",
                approverName: '',
                approvedDate:" ",
            },
        }
    },
    computed: {
        formattedDateRequest() {
            if (this.displayPDF.dateRequested) {
                const date = new Date(this.displayPDF.dateRequested);
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}/${month}/${day}`;
            }
            return '';
        },

        formattedApprovedDate() {
            if (this.displayPDF.approvedDate) {
                const date = new Date(this.displayPDF.approvedDate);
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}/${month}/${day}`;
            }
            return '';
        },
    },
    methods: {
        async getPersonnelRequisitonForm(refNo) {
            try {
                const data = await getPersonnelRequisitonForm(refNo);
                if (data) {
                    this.uniqueKey = data.uniqueKey;

                    const JobDescription = await getJobDescription(this.uniqueKey);

                    if (JobDescription) {
                        this.displayPDF = {
                            ...JobDescription.displayPDF,
                            ...JobDescription,
                        }
                        this.JDRefNo = JobDescription.refNo
                    }
                }
            } catch (error) {
                console.error("Error fetching job description:", error);
                throw error;
            }
        },

        async generateJDPDF(refNo) {
            try {

                await this.getPersonnelRequisitonForm(refNo);

                const {
                    dateRequested,
                    company,
                    department,
                    designation,
                    reportTo,
                    responsibility,
                    duty,
                    experience,
                    education,
                    skills,
                    requesterName,
                    approverName,
                    approvedDate
                } = this.displayPDF;

                const JDExportPDF = {
                    content: [
                        {
                            style: 'tableJD',
                            table: {
                                widths: ['20%', '30%', '20%', '10%', '10%', '10%'],
                                body: [
                                    [
                                        {
                                            text: 'PKT GROUP OF COMPANIES',fontSize: 14,bold: true,color: 'blue',colSpan: 4,rowSpan: 3,alignment: 'center',verticalAlignment: 'middle',margin: [0, 12, 0, 0],
                                        }, {}, {}, {},
                                        {
                                            text: 'form No',fontSize: 7,alignment: 'center',
                                        }, {
                                            text: 'PKT-FR33', fontSize: 7, alignment: 'center',
                                        },
                                    ],
                                    [
                                        {}, {}, {}, {},
                                        {
                                            text: 'Rev',fontSize: 7,alignment: 'center',
                                        },
                                        {
                                            text: '03',fontSize: 7, alignment: 'center',
                                        },
                                    ],
                                    [
                                        {}, {}, {}, {},
                                        {
                                            text: 'Effective Date',fontSize: 7,alignment: 'center',
                                        },
                                        {
                                            text: '18th May 2015 ',fontSize: 7,alignment: 'center',
                                        },
                                    ],
                                    [
                                        {
                                            text: 'JOB DESCRIPTION',alignment: 'center',fontSize: 12,colSpan: 6,bold: true,
                                        }, {}, {}, {}, {}, {},
                                    ],
                                    [
                                        {
                                            text: 'Company:',fontSize: 10,bold: true,border: [true, false, false, false]

                                        },
                                        {
                                            text: company || '-', colSpan: 5,border: [false, false, true, false], fontSize: 9,

                                        }, {}, {}, {}, {},
                                    ],
                                    [
                                        {
                                            text: 'Department:', fontSize: 10,bold: true, border: [true, false, false, false]

                                        },
                                        {
                                            text: department || '-', colSpan: 5, border: [false, false, true, false],fontSize: 9,

                                        }, {}, {}, {}, {},
                                    ],
                                    [
                                        {
                                            text: 'Position:', fontSize: 10,bold: true,border: [true, false, false, false]
                                        },
                                        {
                                            text: designation || '-',colSpan: 5,border: [false, false, true, false], fontSize:9,
                                        }, {}, {}, {}, {},
                                    ],
                                    [
                                        {
                                            text: 'Report To:', fontSize: 10,bold: true, border: [true, false, false, false]
                                        },
                                        {
                                            text: reportTo || '',colSpan: 5,border: [false, false, true, false], fontSize:9,

                                        }, {}, {}, {}, {},
                                    ],
                                    [
                                        {
                                            text: 'RESPONSIBILITIES', alignment: 'center',fontSize: 12, bold: true,colSpan: 6,fillColor: '#E6E6E6'
                                        }, {}, {}, {}, {}, {},
                                    ],
                                    [
                                        {
                                            text: responsibility.map((item, index) => `${index + 1}. ${item}`).join('\n'), alignment: 'left',bold: false,colSpan: 6,fontSize:9,
                                        }, {}, {}, {}, {}, {},
                                    ],
                                    [
                                        {
                                            text: 'DUTIES',alignment: 'center',fontSize: 12,bold: true,colSpan: 6,fillColor: '#E6E6E6'
                                        }, {}, {}, {}, {}, {},
                                    ],
                                    [
                                        {
                                            text: duty.map((item, index) => `${index + 1}. ${item}`).join('\n'),alignment: 'left', bold: true,colSpan: 6,fontSize:9,
                                        }, {}, {}, {}, {}, {},
                                    ],
                                    [
                                        {
                                            text: 'COMPETENCE',alignment: 'center',fontSize: 12, bold: true, colSpan: 6,fillColor: '#E6E6E6'
                                        }, {}, {}, {}, {}, {},
                                    ],
                                    [
                                        {
                                            text: 'Education:',fontSize: 10,bold: true, border: [true, false, false, false]

                                        },
                                        {
                                        text: education.join(', '), colSpan: 5, border: [false, false, true, false], fontSize: 9,
                                        }, {}, {}, {}, {},
                                    ],
                                    [
                                        {
                                            text: 'Experience:',fontSize: 10,bold: true,border: [true, false, false, false]
                                        },
                                        {
                                            text: experience.join(', '),colSpan: 5,border: [false, false, true, false], fontSize:9,

                                        }, {}, {}, {}, {},
                                    ],
                                    [
                                        {
                                            text: 'Skills:',fontSize: 10,bold: true,border: [true, false, false, false]
                                        },
                                        {
                                            text: skills.join(', '),colSpan: 5, border: [false, false, true, false], fontSize:9,
                                        }, {}, {}, {}, {},
                                    ],
                                    [
                                        {
                                            text: 'PREPARED BY:',fontSize: 10, bold: true,alignment: 'left',border: [true, true, false, false]
                                        },
                                        {
                                            text: '',fontSize: 9,bold: false,border: [false, true, true, false], 
                                        }, {
                                            text: 'APPROVED BY:',fontSize: 10,bold: true,alignment: 'left',border: [true, true, false, false]
                                        },
                                        {
                                            text: '',fontSized: 8,bold: false,colSpan: 3,border: [false, true, true, false]


                                        }, {}, {},
                                    ],
                                    [
                                        {
                                            text: 'Name:',
                                            fontSize: 9,
                                            bold: true,
                                            border: [true, false, false, false]

                                        }, {
                                            text: requesterName || '-',
                                            fontSize: 9,
                                            bold: false,
                                            border: [false, false, true, false]
                                        }, {
                                            text: 'Name:',
                                            fontSize: 9,
                                            bold: true,
                                            border: [false, false, false, false]
                                        }, {
                                            text: approverName || '-',
                                            fontSize: 9,
                                            bold: false,
                                            colSpan: 3,
                                            border: [false, false, true, false]
                                        }, {}, {},
                                    ],
                                    [
                                        {
                                            text: 'Date:',
                                            fontSize: 9,
                                            bold: true,
                                            border: [true, false, false, true]
                                        }, {
                                            text: `${this.formattedDateRequest || '-'}`,
                                            fontSize: 9,
                                            bold: false,
                                            border: [false, false, false, true]
                                        },
                                        {
                                            text: 'Date:',
                                            fontSize: 9,
                                            bold: true,
                                            border: [true, false, false, true]
                                        }, {
                                            text: `${this.formattedApprovedDate || '-'}`,
                                            fontSize: 9,
                                            bold: false,
                                            colSpan: 3,
                                            border: [false, false, true, true]
                                        }, {}, {},
                                    ],
                                ],
                            },
                        }
                    ],
                    styles: {
                        header: {
                            fontSize: 10,
                            margin: [0, 0, 0, 10]
                        },
                        headerRight: {
                            fontSize: 7,
                        },
                    }
                };
                pdfMake.createPdf(JDExportPDF).download(`Job_Description_${this.JDRefNo}.pdf`);
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
        } 
    },

}


</script>