/**
 * @jest-environment jsdom
 */

import { handleSubmit } from "../src/client/js/formHandler"
import axios from 'axios'
import 'regenerator-runtime/runtime'

jest.mock('axios')


describe("Testing the form handler function", () => {
    test("Testing that handler function functions as intended", async () => {
        document.body.innerHTML =
            '<div id="input">TEST</div>' +
            '<div id="results"></div>'

        const mockResponse = {
            data: {
                subjectivity: 'OBJECTIVE'
            }
        }
        axios.post.mockResolvedValue(mockResponse)

        await handleSubmit({
            preventDefault: function(){}
        })
        expect(document.getElementById('results').innerHTML).toEqual(mockResponse.data.subjectivity)
    })
})