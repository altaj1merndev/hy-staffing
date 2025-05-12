import baseApi from "../baseApi";
const baseUrl = "/how-to-works"
const howItWorksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllHowItWorks: builder.query({
    query: (params = {}) => {    
        const queryString = new URLSearchParams(params).toString();
        return {
          url: `${baseUrl}/?${queryString}`,
          method: "GET",
        };
      },
      providesTags: ["HowItWorks"],
    }),

    createHowItWorks: builder.mutation({
      query: (newData) => ({
        url: `${baseUrl}`,
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["HowItWorks"],
    }),

    updateHowItWorks: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `${baseUrl}/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["HowItWorks"],
    }),

    deleteHowItWorks: builder.mutation({
      query: (id) => ({
        url: `${baseUrl}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["HowItWorks"],
    }),
  }),
});

export const {
  useGetAllHowItWorksQuery,
  useCreateHowItWorksMutation,
  useUpdateHowItWorksMutation,
  useDeleteHowItWorksMutation,
} = howItWorksApi;
