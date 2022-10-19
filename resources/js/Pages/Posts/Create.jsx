import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, Link } from '@inertiajs/inertia-react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Dashboard(props) {

    const [imagePreview, setImagePreview] = useState(null);

    const { data, setData, errors, post, progress } = useForm({
        title: "",
        description: "",
        image: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("posts.store"));
    }

    // useEffect(() => {
    //     previewImage();
    // }, [data.image]);

    function setImage(e) {
        const image = e.target.files[0];
        setImagePreview(URL.createObjectURL(image));
        setData("image", e.target.files[0])
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Post</h2>}
        >
            <Head title="Posts" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("posts.index") }
                                >
                                    Back
                                </Link>
                            </div>

                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Title</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Title"
                                            name="title"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Body</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="body"
                                            name="body"
                                            errors={errors.body}
                                            value={data.body}
                                            onChange={(e) =>
                                                setData("body", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.body}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Image</label>
                                        <input
                                            type="file"
                                            className="w-full px-4 py-2"
                                            label="Image"
                                            name="image"
                                            onChange={(e) => setImage(e)}
                                        />
                                        <span className="text-red-600">
                                            {errors.image}
                                        </span>
                                    </div>
                                </div>
                                {progress && (
                                  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" width={progress.percentage}> {progress.percentage}%</div>
                                  </div>
                                )}

                                {data.image &&
                                    <div className='mb-4'>
                                        <img className='w-32 rounded' src={imagePreview} />
                                    </div>
                                }

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
