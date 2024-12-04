<template>
  <div></div>
</template>

<script>
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { GetViewTrainingEvaluation } from "@/api/EFormApi.js";

export default {
  name: 'TrainingEvaluationExportPDF',
  data() {
    return {
      displayPDF: {
        name: '',
        designation: '',
        trainingDate: '',
        courseTitle: '',
        trainingInstitution: '',
        trainerName: '',
        trainingVenue: '',
        programObjective: '',
        programSupport: '',
        trainingNature: [],
        trainingBenefit: '',
        generalComment: '',
        trainerPresentation:'',
        testResult: '',
      }
    }
  },
  mounted() {
    // const refNo = this.$route.params.refNo;
    // console.log('RefNo:', refNo);
    // this.GetViewTrainingEvaluation(refNo);
  },
  methods: {

    async GetViewTrainingEvaluation(refNo) {
      try {
        const data = await GetViewTrainingEvaluation(refNo);
        if (data) {
          this.displayPDF = {
            ...data.displayPDF,
            ...data,
          };
          
        } else {
          console.warn("No data retrieved for refNo:", refNo);
        }
      } catch (error) {
        console.error("Error loading training evaluation:", error);
        throw error;
      }
    },

    async generatePDF(refNo) {
      try {
        await this.GetViewTrainingEvaluation(refNo);
        const { name, designation, trainingDate, courseTitle, trainingInstitution, trainerName, trainingVenue, programObjective, programSupport, trainerPresentation, testResult, trainingNature, trainingBenefit, generalComment } = this.displayPDF;
        const validTrainingNature = trainingNature.split(', ').map(item => item.trim());

        const checkmark = (condition) => (condition ? '[  /  ]' : '[     ]')

        const skillsChecked = checkmark(validTrainingNature.includes('skills'));
        const knowledgeChecked = checkmark(validTrainingNature.includes('knowledge'));
        const refresherChecked = checkmark(validTrainingNature.includes('refresher'));

        const evaluationChecked = (value, level) => (value === level ? '  /  ' : '     ');


        const dd = {
          header: {
            stack: [
              {
                columns: [
                  { text: 'PKT GROUP COMPANIES', style: 'header' },
                  {
                    stack: [
                      { text: 'FORM NO: PKT-FR13', style: 'headerRight', alignment: 'right' },
                      { text: `REV NO: 02`, style: 'headerRight', alignment: 'right' },
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
              style: 'TableTitle',
              table: {
                widths: ['*'],
                body: [
                  [
                    {
                      text: 'TRAINING EVALUATION FORM',
                      alignment: 'center',
                      bold: true,
                      fontSize: 14,
                      margin: [10, 5, 10, 5]
                    }
                  ]
                ]
              },
              layout: {
                hLineWidth: function (i) {
                  return 0.5;
                },
                vLineWidth: function (i) {
                  return 0.5;
                }
              }
            },
            {
              text: 'SECTION A', style: 'SectionATitle'
            },
            {
              style: 'tableIntroduction',
              table: {
                widths: ['*'],
                body: [
                  [
                    {
                      text: 'Introduction',
                      alignment: 'left',
                      bold: true,
                      fontSize: 10,
                      color: 'white',
                      fillColor: 'black',
                    }
                  ],
                  [
                    {
                      table: {
                        widths: ['50%', '50%'],
                        body: [
                          [
                            {
                              text: "1. Trainee's Name: ",
                              alignment: 'left',
                              fontSize: 10,
                              bold: true
                            },
                            {
                              text: name || '',
                              alignment: 'right',
                              fontSize: 8,
                              bold: false
                            }
                          ],
                          [
                            {
                              text: "2. Trainee’s Designation: ",
                              alignment: 'left',
                              fontSize: 10,
                              bold: true
                            },
                            {
                              text: designation || '',
                              alignment: 'right',
                              fontSize: 8,
                              bold: false
                            }
                          ],
                          [
                            {
                              text: "3. Course Title: ",
                              alignment: 'left',
                              fontSize: 10,
                              bold: true
                            },
                            {
                              text: courseTitle || '',
                              alignment: 'right',
                              fontSize: 8,
                              bold: false
                            }
                          ],
                          [
                            {
                              text: "4. Training Institution: ",
                              alignment: 'left',
                              fontSize: 10,
                              bold: true
                            },
                            {
                              text: trainingInstitution || '',
                              alignment: 'right',
                              fontSize: 8,
                              bold: false
                            }
                          ],
                          [
                            {
                              text: "5. Trainer's Name: ",
                              alignment: 'left',
                              fontSize: 10,
                              bold: true
                            },
                            {
                              text: trainerName || '',
                              alignment: 'right',
                              fontSize: 8,
                              bold: false
                            }
                          ],
                          [
                            {
                              text: "6. Date: ",
                              alignment: 'left',
                              fontSize: 10,
                              bold: true
                            },
                            {
                              text: trainingDate || '',
                              alignment: 'right',
                              fontSize: 8,
                              bold: false
                            }
                          ],
                          [
                            {
                              text: "7. Venue: ",
                              alignment: 'left',
                              fontSize: 10,
                              bold: true
                            },
                            {
                              text: trainingVenue || '',
                              alignment: 'right',
                              fontSize: 8,
                              bold: false
                            }
                          ],
                          [
                            {
                              text: "8. Nature of Training:",
                              alignment: 'left',
                              fontSize: 10,
                              bold: true
                            },
                            {
                              table: {
                                widths: ['33%', '33%', '34%'],
                                body: [
                                  [
                                    { text: `Skills ${skillsChecked}`, fontSize: 8, alignment: 'right' },
                                    { text: `Knowledge ${knowledgeChecked}`, fontSize: 8, alignment: 'right' },
                                    { text: `Refresher ${refresherChecked}`, fontSize: 8, alignment: 'right' }
                                  ]
                                ]
                              },
                              layout: 'noBorders'
                            }
                          ]
                        ]
                      },
                      layout: 'noBorders'
                    }
                  ]
                ]
              },
              layout: {
                hLineWidth: function (i, node) {
                  if (i === 0) return 0.5;
                  if (i === 1) return 0.5;
                  return 0.5;
                },
                vLineWidth: function (i) {
                  return 0.5;
                },
                paddingLeft: function (i) {
                  return 8;
                },
                paddingRight: function (i) {
                  return 8;
                },
                paddingTop: function (i) {
                  return 4;
                },
                paddingBottom: function (i) {
                  return 4;
                }
              }
            }
            ,
            {
              style: 'tableObjectives',
              table: {
                widths: ['25%', '18.75%', '18.75%', '18.75%', '18.75%'],
                body: [
                  [
                    {
                      text: 'Training Objectives and Content:', colSpan: 5, alignment: 'left', bold: true, fontSize: 10, margin: [0, 0, 0, 0], border: [true, true, true, true], color: 'white',
                      fillColor: 'black',
                    },
                    {}, {}, {}, {}
                  ],
                  [
                    { text: 'a. Please give your feedback on the following statements, which relate to this training program:', colSpan: 5, alignment: 'left', bold: true, fontSize: 10, border: [true, true, true, true], fillColor: '#E6E6E6' },
                    {}, {}, {}, {}
                  ],
                  [
                    { text: 'Evaluation Criteria', fontSize: 10, alignment: 'left', bold: true, border: [true, true, true, true] },
                    { text: 'Poor', fontSize: 10, alignment: 'center', bold: true, border: [true, true, true, true] },
                    { text: 'Fair', fontSize: 10, alignment: 'center', bold: true, border: [true, true, true, true] },
                    { text: 'Good', fontSize: 10, alignment: 'center', bold: true, border: [true, true, true, true] },
                    { text: 'Excellent', fontSize: 10, alignment: 'center', bold: true, border: [true, true, true, true] }
                  ],
                  [
                    { text: '1. Objectives of this program adequately met', fontSize:8, alignment: 'left', border: [true, true, true, true] },
                    { text: evaluationChecked(programObjective, 'Poor'), fontSize:8, alignment: 'center', border: [true, true, true, true] },
                    { text: evaluationChecked(programObjective, 'Fair'), fontSize: 8, alignment: 'center', border: [true, true, true, true] },
                    { text: evaluationChecked(programObjective, 'Good'), fontSize: 8, alignment: 'center', border: [true, true, true, true] },
                    { text: evaluationChecked(programObjective, 'Excellent'), fontSize:8, alignment: 'center', border: [true, true, true, true] },
                  ],
                  [
                    { text: '2. Training will greatly assist you in your profession / area of work.', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
                    { text: evaluationChecked(programSupport, 'Poor'), fontSize: 8, alignment: 'center', border: [true, true, true, true] },
                    { text: evaluationChecked(programSupport, 'Fair'), fontSize: 8, alignment: 'center', border: [true, true, true, true] },
                    { text: evaluationChecked(programSupport, 'Good'), fontSize: 8, alignment: 'center', border: [true, true, true, true] },
                    { text: evaluationChecked(programSupport, 'Excellent'), fontSize: 8, alignment: 'center', border: [true, true, true, true] },
                  ],
                  [
                    { text: '3. Trainer has good presentation skill/style, knowledge, and grip over the subject.', fontSize: 10, alignment: 'left', border: [true, true, true, true] },
                    { text: evaluationChecked(trainerPresentation, 'Poor'), fontSize: 8, alignment: 'center', border: [true, true, true, true] },
                    { text: evaluationChecked(trainerPresentation, 'Fair'), fontSize: 8, alignment: 'center', border: [true, true, true, true] },
                    { text: evaluationChecked(trainerPresentation, 'Good'), fontSize: 8, alignment: 'center', border: [true, true, true, true] },
                    { text: evaluationChecked(trainerPresentation, 'Excellent'), fontSize: 8, alignment: 'center', border: [true, true, true, true] },
                  ],
                  [
                    { text: '4. Test result (if any)', fontSize: 8, alignment: 'left', border: [true, true, true, true] },
                    { text: evaluationChecked(testResult, 'Poor'), fontSize: 8, alignment: 'center', border: [true, true, true, true] },
                    { text: evaluationChecked(testResult, 'Fair'), fontSize: 8, alignment: 'center', border: [true, true, true, true] },
                    { text: evaluationChecked(testResult, 'Good'), fontSize: 8, alignment: 'center', border: [true, true, true, true] },
                    { text: evaluationChecked(testResult, 'Excellent'), fontSize: 8, alignment: 'center', border: [true, true, true, true] },
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
              style: "TableBenefitGained",
              table: {
                widths: ['*'],
                heights: [20, 60],
                body: [
                  [
                    {
                      text: 'b. Please describe briefly on what you have gained from the course. (You may also share your idea on how would you plan or in what way will you apply the benefits from the course – if any.)',
                      alignment: 'left',
                      bold: true,
                      fontSize: 10,
                      fillColor: '#E6E6E6',
                    }
                  ],
                  [
                    {
                      text: trainingBenefit || '',
                      alignment: 'left',
                      bold: false,
                      fontSize: 10,
                      minHeight: 40,
                    }
                  ],
                ]
              },
              layout: {
                hLineWidth: function (i) {
                  return 0.5;
                },
                vLineWidth: function (i) {
                  return 0.5;
                }
              }
            },
            {
              style: "TableGeneralComment",
              table: {
                widths: ['*'],
                heights: [0, 60],
                body: [
                  [
                    {
                      text: 'c. General Comments, ( if any):',
                      alignment: 'left',
                      bold: true,
                      fontSize: 10,
                      color: 'white',
                      fillColor: 'black',
                    }
                  ],
                  [
                    {
                      text: generalComment || '',
                      alignment: 'left',
                      bold: false,
                      fontSize: 10,
                      minHeight: 40,
                    }
                  ],
                ]
              },
              layout: {
                hLineWidth: function (i) {
                  return 0.5;
                },
                vLineWidth: function (i) {
                  return 0.5;
                }
              }
            },
            {
              style: 'tableSignature',
              table: {
                widths: ['30%', '30%', '20%', '20%'],
                body: [
                  [
                    {
                      text: 'Name: ',
                      fontSize: 10,
                      bold: true
                    },
                    {
                      text: ' ',
                      fontSize: 10,
                      bold: true
                    },
                    {
                      text: 'Date: ',
                      fontSize: 10,
                      bold: true
                    },
                    {
                      text: ' ',
                      fontSize: 10,
                      bold: true
                    }
                  ],
                ]
              },

              layout: 'noBorders',
              pageBreak: 'after',
            },
            {

              text: 'SECTION B', style: 'SectionATitle',

            },
            {
              style: "TableGeneralComment",
              table: {
                widths: ['*'],
                heights: [0, 0, 0, 60],
                body: [
                  [
                    {
                      text: "(To be filled in by the superior one month after the training if the course attended relevant to Trainee’s job scope/function.):",
                      alignment: 'left',
                      bold: true,
                      fontSize: 10,
                      italics: true
                    }
                  ],
                  [
                    {
                      text: 'Training Effectiveness: ',
                      alignment: 'left',
                      bold: true,
                      fontSize: 10,
                      color: 'white',
                      fillColor: 'black',
                    }
                  ],
                  [
                    {
                      text: 'How has the individuals performance changed after training? ',
                      alignment: 'left',
                      bold: true,
                      fontSize: 10,
                      fillColor: '#E6E6E6'
                    }
                  ],
                  [
                    {
                      text: '',
                      alignment: 'left',
                      bold: true,
                      fontSize: 10,
                      minHeight: 40,
                    }
                  ],
                ]
              },
              layout: {
                hLineWidth: function (i) {
                  return 0.5;
                },
                vLineWidth: function (i) {
                  return 0.5;
                }
              }
            },

            {
              style: 'tableSignature',
              table: {
                widths: ['30%', '30%', '20%', '20%'],
                body: [
                  [
                    {
                      text: 'Name: ',
                      fontSize: 10,
                      bold: true
                    },
                    {
                      text: ' ',
                      fontSize: 10,
                      bold: true
                    },
                    {
                      text: 'Date: ',
                      fontSize: 10,
                      bold: true
                    },
                    {
                      text: ' ',
                      fontSize: 10,
                      bold: true
                    }
                  ],
                ]
              },

              layout: 'noBorders',
            },


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

          }
        };
        pdfMake.createPdf(dd).download(`Training_Evaluation_${refNo}.pdf`);
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
};
</script>