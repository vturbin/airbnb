import { SubmitButton } from "@/components/form/Buttons"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import PriceInput from "@/components/form/PriceInput"
import { createPropertyAction } from "@/utils/actions"

function CreatePropertyPage() {
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">
                create property
            </h1>
            <div className="border p-8 rounded-md">
                <h3 className="text-lg mb-4 font-medium">General Info</h3>
                <FormContainer action={createPropertyAction}>
                    <div className="grid md:grid-cols-2 gap-8 mb-4">
                        <FormInput
                            name="name"
                            type="text"
                            label="Name (20 limit)"
                            defaultValue="Cabin in Latvia"
                        />
                        <FormInput
                            name="tagline"
                            type="text "
                            label="Tagline (30 limit)"
                            defaultValue="Dream Getaway Awaits You Here!"
                        />
                        <PriceInput />
                        {/* categories */}
                    </div>
                    {/* text area / description */}
                    <SubmitButton text="create rental" className="mt-12" />
                </FormContainer>
            </div>
        </section>
    )
}

export default CreatePropertyPage