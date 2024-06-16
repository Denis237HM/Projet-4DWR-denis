import React from 'react';

function DetailsProfil() {
    return (
        <>
            <br/><br/>
            <div className="flex flex-wrap items-start justify-center h-max mb-4">
                <div className="container relative max-w-4xl bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-12 flex">
                    {/* Section principale à gauche */}
                    <div className="w-3/5 px-8">
                        <div className="flex justify-start mb-8">
                            <span className="block relative h-24 w-24">
                                <img className="mx-auto object-cover rounded-full h-24 w-24 bg-white" src="https://i.postimg.cc/305XvPMj/photo-2023-12-21-19-59-49.jpg" alt="profile photo" />
                            </span>
                        </div>
                        <div className="px-7 mb-8">
                            <h2 className="text-3xl font-bold text-green-800 dark:text-gray-300">
                                Jafar Mirzapoor
                            </h2>
                            <p className="text-sm text-gray-400 mt-2 dark:text-gray-400">
                                Web Designer | Frontend Developer
                            </p>
                            <div className="flex flex-auto w-100 my-5">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-6 rounded-full">
                                    <a href="https://github.com/jeff-mz">Projects</a>
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    <a href="mailto:jafarmirzapoor11@gmail.com">Hire Me</a>
                                </button>
                            </div>
                        </div>
                        {/* Compétences */}
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-2">Compétences</h3>
                            <ul className="list-disc list-inside">
                                <li>HTML5, CSS3, JavaScript</li>
                                <li>React, Vue.js</li>
                                <li>UI/UX Design</li>
                            </ul>
                        </div>
                        {/* Expériences */}
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-2">Expériences</h3>
                            <p className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        {/* Formations */}
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-2">Formations</h3>
                            <p className="text-gray-600 dark:text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        {/* Connexions */}
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-2">Connexions</h3>
                            <ul className="list-disc list-inside">
                                <li>LinkedIn: <a href="https://www.linkedin.com/in/jafarmirzapoor/">Jafar Mirzapoor</a></li>
                                <li>Twitter: <a href="https://twitter.com/jafarmz">jafarmz</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Section à droite */}
                    <div className="w-2/5 px-4 py-2 bg-gray-200 dark:bg-gray-900 rounded">
                        {/* Section pour la poste */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-2">Poste</h3>
                            <p className="text-gray-600 dark:text-gray-400">Web Designer chez XYZ Company</p>
                        </div>
                        {/* Section pour les articles de l'utilisateur */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-4">Articles de Jafar Mirzapoor</h3>
                            {/* Exemple d'article */}
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 mb-4">
                                <img className="w-full" src="https://via.placeholder.com/300" alt="Article" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Article Title</div>
                                    <p className="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                                <div className="px-6 py-4">
                                    <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2">#tag1</span>
                                    <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300">#tag2</span>
                                </div>
                            </div>
                            {/* Autres articles peuvent être ajoutés de manière similaire */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsProfil;
