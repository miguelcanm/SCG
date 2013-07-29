package org.opentaps.common.builder;

/*
 * Copyright (c) Open Source Strategies, Inc.
 *
 * Opentaps is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Opentaps is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Opentaps.  If not, see <http://www.gnu.org/licenses/>.
 */

import java.util.List;

/**
 * A page builder allows post-processing of the results generated by a ListBuilder.
 * These are useful when a generic list builder such as EntityListBuilder is sufficient
 * to retrieve the data but the overhead of defining a custom ListBuilder to process the
 * results is not desired.
 *
 * The canonical usage is to create an anonymous instance of this interface containing
 * an implementation of build().  For example,
 *
 * PageBuilder pageBuilder = new PageBuilder() {
 *      List build(List page) throws Exception {
 *          return page;
 *      }
 * }
 *
 * Then you would give this page builder to a list builder,
 *
 * listBuilder.setPageBuilder(pageBuilder);
 *
 * When this interface is combined with special list builders such as BshListBuilder, we
 * end up with a powerful way to define the construction of lists of data from within a script.
 *
 * @param <T> the class of entities in the <code>List</code>
 * @see BshListBuilder
 */
public interface PageBuilder<T> {

    /**
     * Given a List containing the page contents as constructed by a ListBuilder,
     * perform any additional modifications of the data as required.
     *
     * @param page List with page contents generated from ListBuilder
     * @return List with the final contents of the page
     * @throws Exception Any exceptions generated will be reported to the screen via ListBuilderException
     */
    public List<?> build(List<T> page) throws Exception;

}