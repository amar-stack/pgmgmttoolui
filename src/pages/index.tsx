/* eslint-disable @typescript-eslint/no-unused-vars */
import { mdiAccount, mdiBallotOutline, mdiHome, mdiIdCard, mdiMail, mdiNetwork, mdiPhone } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import { ReactElement } from 'react'
import Button from '../components/Button'
import Buttons from '../components/Buttons'
import Divider from '../components/Divider'
import CardBox from '../components/CardBox'
import FormCheckRadio from '../components/Form/CheckRadio'
import FormCheckRadioGroup from '../components/Form/CheckRadioGroup'
import FormField from '../components/Form/Field'
import FormFilePicker from '../components/Form/FilePicker'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitle from '../components/Section/Title'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import axios from 'axios';

const FormsPage = () => {


  const registerApiCall = async (values) => {
    console.log(values, "values")
    try {
      const response = await axios.post('http://3.111.218.67:3000/v1/auth/register', {
        ...values
        // add more data if needed
      });
      response.status === 201 && alert("successfully registered")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton icon={mdiBallotOutline} title="Registration form" main>
          
        </SectionTitleLineWithButton>

        <CardBox>
          <Formik
            initialValues={{
              name: '',
              password: 'test1234',
              email: '',
              phone: '',
              profession: '',
              organisation: '',
              designation: '',
              bed: '',
              occupation: '',
              duration: '',
              budget: '',
              reference: '',
              location: '',
              comments: ''
            }}
            onSubmit={(values) => registerApiCall(values)}
            // onReset={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <FormField label="Primary Details" icons={[mdiAccount, mdiMail, mdiPhone]}>
                <Field name="name" placeholder="Full name" />
                <Field type="email" name="email" placeholder="Email" />
              </FormField>
              <FormField label="Mobile Number" icons={[mdiPhone]}>
                <Field name="phone" placeholder="9999999999" type="number" />
              </FormField>
              <FormField
                label="Profession"
                labelFor="profession"
                icons={[mdiNetwork]}
              >
                <Field name="profession" placeholder="Student/Software-Engineer" id="profession" />
              </FormField>
              <FormField
                label="Name of the Institution/Company"
                labelFor="organisation"
                icons={[mdiHome]}
              >
                <Field name="organisation" placeholder="xyz company" id="organisation" />
              </FormField>
              <FormField
                label="Name of the Course/Designation"
                labelFor="designation"
                icons={[mdiIdCard]}
              >
                <Field name="designation" placeholder="Software Engineer" id="designation" />
              </FormField>

              <FormField label="Bed Requirement" labelFor="bed">
                <Field name="bed" id="bed" component="select">
                  <option value="singlebed">Single Sharing</option>
                  <option value="doublebed">Double Sharing</option>
                  <option value="triplebed">Triple Sharing</option>
                </Field>
              </FormField>

              <FormField label="DaTe of Occupation">
                <Field name="occupation" placeholder="09-02-2024" type="date" />
              </FormField>

              <FormField label="Approximate duration of stay">
                <Field name="duration" placeholder="Number of months" type="date" />
              </FormField>

              <FormField label="Budget" labelFor="budget">
                <Field name="budget" id="budget" component="select">
                  <option value="5-7k">5-7k</option>
                  <option value="7-10k">7-10k</option>
                  <option value="10-15k">10-15k</option>
                  <option value="15k+">15k+</option>
                </Field>
              </FormField>

              <FormField label="Reference">
                <Field name="reference" placeholder="Referred by amar" type="text" />
              </FormField>

              <FormField label="Property location">
                <Field name="location" placeholder="Number of location eg., HSR layout" type="text" />
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

export default FormsPage
