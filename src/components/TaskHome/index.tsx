import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { ITask } from "../../interfaces/task"
import HomeView from "./view"

const Home: React.FC = props => {

    const methods = useForm<ITask>({
        defaultValues: {
            task: ""
        }
    })

    const { handleSubmit, reset } = methods

    const onSubmit: SubmitHandler<ITask> = data => {

        reset({
            task: ""
        })

        console.log(data)
    }

    return (
        <FormProvider {...methods}>
            <HomeView
                onSubmit={handleSubmit(onSubmit)}
            />
        </FormProvider>
    )
}

export default Home