"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookFilterAbleFileds = exports.BookSearchAbleFields = void 0;
exports.BookSearchAbleFields = ['title', 'author', 'genre'];
exports.BookFilterAbleFileds = [
    'searchTerm',
    'title',
    'author',
    'genre',
    'sortBy',
    'sortOrder',
    'minPrice',
    'maxPrice',
    'category',
];
/*

const getBooks = async (
  filters: IBookFiltersRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Books[]>> => {
  const { page, skip, limit } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;
  console.log('options service:', options);
  console.log('filters service:', filters);
  const andConditons = [];

  if (searchTerm) {
    andConditons.push({
      OR: BookSearchAbleFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditons.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }


  const whereConditons: Prisma.BooksWhereInput =
    andConditons.length > 0 ? { AND: andConditons } : {};

  //const result = await prisma.books.findMany();
  const result = await prisma.books.findMany({
    where: whereConditons,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
    include: { category: { select: { title: true } } },
  });

  const total = await prisma.books.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};
=================================== controller
const getBooks = catchAsync(async (req: Request, res: Response) => {
  try {
    // ?page=1&limit=3    ||
    const filters = pick(req.query, BookFilterAbleFileds);
    const options = pick(req.query, [
      'limit',
      'page',
      'searchTerm',
      'title',
      'genre',
      'sortBy',
      'sortOrder',
      'minPrice',
      'maxPrice',
      'category',
    ]);

    const result = await BookService.getBooks(filters, options);
    res.status(200).json({
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book retrive successfully !!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: 'somthing went wrong !!',
      data: error,
    });
  }
});
*/
