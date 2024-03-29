/* eslint-disable @typescript-eslint/no-unused-vars */
import { mdiAccount, mdiBallotOutline, mdiHome, mdiIdCard, mdiMail, mdiNetwork, mdiPhone, mdiRoomService, mdiUpload } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import { ReactElement, useState } from 'react'
import Button from '../../components/Button'
import Buttons from '../../components/Buttons'
import Divider from '../../components/Divider'
import CardBox from '../../components/CardBox'
import FormCheckRadio from '../../components/Form/CheckRadio'
import FormCheckRadioGroup from '../../components/Form/CheckRadioGroup'
import FormField from '../../components/Form/Field'
import FormFilePicker from '../../components/Form/FilePicker'
import LayoutAuthenticated from '../../layouts/Authenticated'
import SectionMain from '../../components/Section/Main'
import SectionTitle from '../../components/Section/Title'
import SectionTitleLineWithButton from '../../components/Section/TitleLineWithButton'
import { getPageTitle } from '../../config'
import axios from 'axios';
import { useRouter } from "next/router";
import {ReactS3Client} from "react-s3-typescript";




const UploadDocs = () => {
    const router = useRouter();
    const { id } = router.query;
    const isRoundIcon = false;
    const config = {
      bucketName: 'pgmgmttool-bucket',
      region: 'ap-south-1',
      accessKeyId: 'AKIASAZF4KVXGYXY5SMV',
      secretAccessKey: '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',
      acl: 'public-read'
    }

    const [uploadAdhar, setUploadAdhar] = useState(null)
    const [uploadAdharurl, setUploadAdharurl] = useState('')


  const handleFileChange = async (event) => {

    setUploadAdhar(event.currentTarget.files[0])
    const s3 = new ReactS3Client(config);
    const res = await s3.uploadFile(event.currentTarget.files[0], `${id}_uploadAdhar`);
    console.log(res, "res")
    setUploadAdharurl(res.location)
  }

  

  const showAadharFilename = !isRoundIcon && uploadAdhar

  const [institutionID, setInstitutionID] = useState(null)
  const [institutionIDurl, setInstitutionIDurl] = useState('')

  const handleIDChange = async (event) => {
    setInstitutionID(event.currentTarget.files[0])
    const s3 = new ReactS3Client(config);
    const res = await s3.uploadFile(event.currentTarget.files[0], `${id}_institutionID`);
    console.log(res, "res")
    setInstitutionIDurl(res.location)
  }

  const showIDFilename = !isRoundIcon && institutionID
  const registerApiCall = async (values) => {
    console.log(values,"values", uploadAdhar)
    try {
      const response = await axios.patch(`http://13.234.239.70:3000/v1/users/${id}`, {
        ...values,
        uploadAdharurl,
        institutionIDurl
        // add more data if needed
      });
      (response.status === 201 || response.status === 200) && alert("successfully Updated")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Head>
        <title>Upload Docs</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiBallotOutline}
          title="Upload KYC Documnets"
          main
        ></SectionTitleLineWithButton>

        <CardBox>
          <Formik
            initialValues={{
              workAddress: '',
              additionalServices: '',
              comments: '',
            }}
            onSubmit={(values) => registerApiCall(values)}
            // onReset={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              {/* <FormField label="Upload Aadhar card" labelFor="uploadAadhar"> */}
                <div className='max-w-full border-gray-700 rounded w-full dark:placeholder-gray-400'>
                  <label className='block font-bold py-3'>Upload Aadhar card</label>
                  <label className="inline-flex">
                    <Button
                      className={`${isRoundIcon ? 'w-12 h-12' : ''} ${
                        showAadharFilename ? 'rounded-r-none' : ''
                      }`}
                      iconSize={isRoundIcon ? 24 : undefined}
                      label={isRoundIcon ? null : 'Upload'}
                      icon={mdiUpload}
                      color={'info'}
                      roundedFull={isRoundIcon}
                      asAnchor
                    />
                    <input
                      type="file"
                      className="absolute top-0 left-0 w-full h-full border-none opacity-0 cursor-pointer -z-1 "
                      onChange={handleFileChange}
                      accept={'accept'}
                    />
                    {showAadharFilename && (
                    <div className="px-4 py-2 max-w-full flex-grow-0 overflow-x-hidden bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 border rounded-r">
                      <span className="text-ellipsis max-w-full line-clamp-1">{uploadAdhar.name}</span>
                    </div>
                  )}
                  </label>
                  
                </div>
              {/* </FormField> */}
              {/* <FormField label="Upload institution/company ID" labelFor="institutionID"> */}
              <div className='max-w-full border-gray-700 rounded w-full dark:placeholder-gray-400 pb-4'>
                  <label className='block font-bold py-3'>Upload institution/company ID</label>
                  <label className="inline-flex">
                    <Button
                      className={`${isRoundIcon ? 'w-12 h-12 ' : ''} ${
                        showIDFilename ? 'rounded-r-none' : ''
                      }`}
                      iconSize={isRoundIcon ? 24 : undefined}
                      label={isRoundIcon ? null : 'Upload'}
                      icon={mdiUpload}
                      color={'info'}
                      roundedFull={isRoundIcon}
                      asAnchor
                    />
                    <input
                      type="file"
                      className="absolute top-0 left-0 w-full h-full border-none opacity-0 cursor-pointer -z-1 "
                      onChange={handleIDChange}
                      accept={'accept'}
                    />
                    {showIDFilename && (
                    <div className="px-4 py-2 max-w-full flex-grow-0 overflow-x-hidden bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 border rounded-r">
                      <span className="text-ellipsis max-w-full line-clamp-1">{institutionID.name}</span>
                    </div>
                  )}
                  </label>
                  
                </div>
              {/* </FormField> */}
              <FormField
                label="opting of any other services? eg., meals, laundry"
                labelFor="additionalServices"
                icons={[mdiRoomService]}
              >
                <Field
                  name="additionalServices"
                  placeholder="Meals and Laundry"
                  id="additionalServices"
                />
              </FormField>
              <FormField label="Work Address" labelFor="workAddress" icons={[mdiHome]}>
                <Field name="workAddress" placeholder="xyz company" id="workAddress" />
              </FormField>

              <Divider />

              <FormField label="Comments" hasTextareaHeight>
                <Field name="comments" as="textarea" placeholder="Enter your comments here" />
              </FormField>

              <Divider />

              <Buttons>
                <Button type="submit" color="info" label="Submit" />
                <Button type="reset" color="info" outline label="Reset" />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>

      {/* <SectionTitle>Custom elements</SectionTitle> */}

      {/* <SectionMain>
        <CardBox>
          <Formik
            initialValues={{ checkboxes: ['lorem'], switches: ['lorem'], radio: 'lorem' }}
            onSubmit={() => null}
          >
            <Form>
              <FormField label="Checkbox">
                <FormCheckRadioGroup>
                  <FormCheckRadio type="checkbox" label="Lorem">
                    <Field type="checkbox" name="checkboxes" value="lorem" />
                  </FormCheckRadio>
                  <FormCheckRadio type="checkbox" label="Ipsum">
                    <Field type="checkbox" name="checkboxes" value="ipsum" />
                  </FormCheckRadio>
                  <FormCheckRadio type="checkbox" label="Dolore">
                    <Field type="checkbox" name="checkboxes" value="dolore" />
                  </FormCheckRadio>
                </FormCheckRadioGroup>
              </FormField>

              <Divider />

              <FormField label="Radio">
                <FormCheckRadioGroup>
                  <FormCheckRadio type="radio" label="Lorem">
                    <Field type="radio" name="radio" value="lorem" />
                  </FormCheckRadio>
                  <FormCheckRadio type="radio" label="Ipsum">
                    <Field type="radio" name="radio" value="ipsum" />
                  </FormCheckRadio>
                </FormCheckRadioGroup>
              </FormField>

              <Divider />

              <FormField label="Switch">
                <FormCheckRadioGroup>
                  <FormCheckRadio type="switch" label="Lorem">
                    <Field type="checkbox" name="switches" value="lorem" />
                  </FormCheckRadio>
                  <FormCheckRadio type="switch" label="Ipsum">
                    <Field type="checkbox" name="switches" value="ipsum" />
                  </FormCheckRadio>
                </FormCheckRadioGroup>
              </FormField>
            </Form>
          </Formik>
          <Divider />
          <FormField>
            <FormFilePicker label="Upload" color="info" icon={mdiUpload} />
          </FormField>
        </CardBox>
      </SectionMain> */}
    </>
  )
}

// FormsPage.getLayout = function getLayout(page: ReactElement) {
//   return <LayoutAuthenticated>{page}</LayoutAuthenticated>
// }

export default UploadDocs
