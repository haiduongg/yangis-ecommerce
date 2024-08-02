import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const FormSchema = z.object({
    fullName: z.string().min(2, {
        message: 'Your name must be at least 2 characters.',
    }),
    provice: z.string().min(2, {
        message: 'provice must be at least 2 characters.',
    }),
    district: z.string().min(2, {
        message: 'district must be at least 2 characters.',
    }),
    commune: z.string().min(2, {
        message: 'commune must be at least 2 characters.',
    }),
    address: z.string().min(2, {
        message: 'address must be at least 2 characters.',
    }),
    phoneNumber: z.string().min(9, {
        message: 'Your phone number invalid',
    }),
    email: z.string().email().min(2, {
        message: 'email must be at least 2 characters.',
    }),
})

export default function BillingDetailForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            fullName: '',
            provice: '',
            district: '',
            commune: '',
            address: '',
            phoneNumber: '',
            email: '',
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6"
            >
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your name</FormLabel>
                            <FormControl>
                                <Input placeholder="Duong Cao" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="provice"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Provice/City</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ho Chi Minh City"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>District/</FormLabel>
                            <FormControl>
                                <Input placeholder="District 12" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="commune"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ward/Commune</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Hiep Thanh Ward"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address (optional)</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="677/3 Nguyen Anh Thu Street, Hiep Thanh Ward, District 12"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="0862 248 332" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="example@gmail.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* <Button type="submit" className="w-full h-[50px]">
                    Login
                </Button> */}
            </form>
        </Form>
    )
}
